# This is the base dockerfile. Here the base image is pulled and the ras setup is done for the project.
# Make sure to include the base setup for lerna here.
FROM node:16 as base
WORKDIR /app
COPY ./package.json ./
RUN npm install -g npm@9.4.2
COPY ./lerna.json ./
# Package @dg98/components
FROM base as dg98_components-build
WORKDIR /app/packages/components
# Here the dependencies will be installed and the local required packages bootstrapped.
# The --slim flag will cause the package json to only include the dependencies, so not all changes to the package json cause docker to reinstall all packages.
COPY  packages/components/package-slim.json package.json
WORKDIR /app/
RUN npx lerna bootstrap --scope=@dg98/components --includeDependencies
WORKDIR /app/packages/components
# The normal package.json should be copied after the install into the container
COPY  packages/components/package.json ./
# This will only add the command to the dockerfile if the build script exists in the package otherwise its ignored.
# Package @dg98/utils
FROM base as dg98_utils-build
WORKDIR /app/packages/utils
# Here the dependencies will be installed and the local required packages bootstrapped.
# The --slim flag will cause the package json to only include the dependencies, so not all changes to the package json cause docker to reinstall all packages.
COPY  packages/utils/package-slim.json package.json
WORKDIR /app/
RUN npx lerna bootstrap --scope=@dg98/utils --includeDependencies
WORKDIR /app/packages/utils
# The normal package.json should be copied after the install into the container
COPY  packages/utils/package.json ./
# This will only add the command to the dockerfile if the build script exists in the package otherwise its ignored.
# Package pokedex
FROM base as pokedex-build
WORKDIR /app/packages/pokedex
# Here the dependencies will be installed and the local required packages bootstrapped.
# The --slim flag will cause the package json to only include the dependencies, so not all changes to the package json cause docker to reinstall all packages.
COPY  packages/pokedex/package-slim.json package.json
WORKDIR /app/
COPY --from=dg98_components-build /app/packages/components/package.json /app/packages/components/
COPY --from=dg98_utils-build /app/packages/utils/package.json /app/packages/utils/
RUN npx lerna bootstrap --scope=pokedex --includeDependencies
COPY --from=dg98_components-build /app/packages/components/ /app/packages/components/
COPY --from=dg98_utils-build /app/packages/utils/ /app/packages/utils/
WORKDIR /app
# The normal package.json should be copied after the install into the container
# This will only add the command to the dockerfile if the build script exists in the package otherwise its ignored.
RUN npm install lerna --legacy-peer-deps
RUN npm run build:pokedex & npm run prod:pokedex
# final stage
FROM base
COPY --from=dg98_components-build /app/packages/components /app/packages/components
COPY --from=dg98_utils-build /app/packages/utils /app/packages/utils
COPY --from=pokedex-build /app/packages/pokedex /app/packages/pokedex