# Monorepo - Pokedex

## Overview

- Pokedex is a monorepo which includes 3 different codebases, 2 packages named components and utils where we store all the
  reusable code that is used througout the project and 1 project called pokedex which includes the core functionality of the application

- The Project uses Lerna to avoid running script over multiple codebases.

- NextJs is used in the main application for faster Content Delivery and Search Engine Optimization(SEO) with the help of Server Side Rendering(SSR)

- NextJs is built ontop of ReactJS, thus providing all the services provided by REACT suck as it improves performance due to virtual DOM. The DOM is a cross-platform and programming API which deals with HTML, XML or XHTML. Most of the developers faced the problem when the DOM was updated, which slowed down the performance of the application. ReactJS solved this problem by introducing virtual DOM.

- NextJs is choosen by most of the web developers. It is because it offers a very rich JavaScript library. The JavaScript library provides more flexibility to the web developers to choose the approch they want to follow.

Take it for a test drive. We'd love to hear any feedback you have or if you've thought of a new feature.

## Table of Contents

- [Features](#features)
- [Getting started](#getting-started)
- [Contributing To This Project](#contributing-to-this-project)
- [Stay in touch](#stay-in-touch)

## Features

- **Quick start**
- **Integrated ESLint, Prettier**
- **Simple and Standard scaffolding**
- **Common Error Handler**
- **Testing**: unit and integration tests using [Jest](https://jestjs.io)
- **Docker support**
- **Linting**: with [ESLint](https://eslint.org) and [Prettier](https://prettier.io)
- **Redux** : integrated with the help of [Redux toolkit](https://redux-toolkit.js.org/)

## Getting started

Makes easier to write good redux applications and speeds up development.

- Node <https://nodejs.org/en/> _use the LTS version_
- NPM
- [Learn more about TypeScript](https://github.com/parthdave17/pokedex-mono-repo/blob/main/wiki/typescript.md)

### Create Development Environment

Use template strings, object destructuring, arrow functions, Interfaces, JSX syntax and more.

```bash
// clone the application
$ git clone https://github.com/parthdave17/pokedex-mono-repo
```

#### Install The Dependencies

```bash
// Install the required npm modules
$ npm run bootstrap
```

#### Running the app

```bash
# development
$ npm run dev:pokedex

# production mode
$ npm run prod:pokedex
```

#### Test

For this project, We chose [Jest](https://facebook.github.io/jest/) as our test framework.

```bash
# unit tests
$ npm run test:pokedex

```

#### Running the scripts

All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.
This is nice because most JavaScript tools have easy to use command line utilities allowing us to not need grunt or gulp to manage our builds.
If you open `package.json`, you will see a `scripts` section with all the different scripts you can call.
To call a script, simply run `npm run <script-name>` from the command line.
You'll notice that npm scripts can call each other which makes it easy to compose complex builds out of simple individual build scripts.
Below is a list of all the scripts this template has available:

| Npm Script      | Description                                     |
| --------------- | ----------------------------------------------- |
| `bootstrap`     | Install all the dependencies for all code bases |
| `dev:pokedex`   | This script runs project in development mode    |
| `prod:pokedex`  | This script runs project in production mode     |
| `build:pokedex` | Full build. Runs ALL build tasks                |
| `test:pokedex`  | Runs the test cases for the Application         |

## NPM Modules

Node Modules folder is the repository of modules/library which you are using inside your project. What ever you are importing in your project that module or library should present inside the mode_module folder.When you do npm install that time that module or the library install inside the node_module folder and one entry added in package.json file

- [MUI-Component](https://mui.com/material-ui/react-grid/)
- [MUI datagrid](https://mui.com/x/react-data-grid/)
- [eslint](https://eslint.org/docs/latest/use/getting-started)
- [prettier](https://prettier.io/docs/en/index.html)
- [react-dom](https://github.com/parthdave17/pokedex-mono-repo/blob/main/wiki/npm-modules/react-dom.md)
- [react-redux](https://github.com/parthdave17/pokedex-mono-repo/blob/main/wiki/npm-modules/react-redux.md)
- [react-router-dom](https://github.com/parthdave17/pokedex-mono-repo/blob/main/wiki/npm-modules/react-router-dom.md)
- [react-scripts](https://github.com/parthdave17/pokedex-mono-repo/blob/main/wiki/npm-modules/react-scripts.md)
- [redux-toolkit](https://github.com/parthdave17/pokedex-mono-repo/blob/main/wiki/npm-modules/redux-toolkit.md)
- [next-redux-wrapper](https://github.com/kirill-konshin/next-redux-wrapper)

## Contributing To This Project

Contributions are welcome from anyone and everyone. We encourage you to review the [guiding principles for contributing](https://github.com/parthdave17/pokedex-mono-repo/blob/main/wiki/contribution/contribution.md)

- [Bug reports](https://github.com/parthdave17/pokedex-mono-repo/blob/main/wiki/contribution/bug-reports.md)
- [Feature requests](https://github.com/parthdave17/pokedex-mono-repo/blob/main/wiki/contribution/feature-requests.md)

## Stay in touch

- LinkedIn - [https://in.linkedin.com/in/parth-dave-a01367169](https://in.linkedin.com/in/parth-dave-a01367169)
- GitHub - [https://github.com/parthdave17](https://github.com/parthdave17)
