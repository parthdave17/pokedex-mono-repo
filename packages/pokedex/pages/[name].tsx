import { GetStaticProps, GetStaticPaths } from "next";
import { RowData } from ".";
import { wrapper } from "../store/configure";
import { fetchPockenDetail, selectPokemonDetail } from "../store/pokemonDetail";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Card } from "@pokedex/components";
import { makeAPIcall } from "@pokedex/utils";

export type PokemonData = {
  name: string;
  height: number;
  weight: number;
  location_area_encounters: string;
};

const Pokemon = () => {
  const data = useSelector(selectPokemonDetail) as PokemonData;
  const router = useRouter();
  return (
    <div>
      {data && (
        <Card
          name={data.name}
          height={data.height}
          weight={data.weight}
          location={data.location_area_encounters}
        />
      )}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await makeAPIcall("https://pokeapi.co/api/v2/pokemon");
  const paths = data.results.map((pokemon: RowData) => ({
    params: { name: pokemon.name },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = wrapper.getStaticProps((store) => async (ctx) => {
  const data: any = await store.dispatch(
    fetchPockenDetail(ctx?.params?.name as string)
  );
  if (!data) {
    return {
      props: {},
      notFound: true,
    };
  }
  return {
    props: {},
  };
});

export default Pokemon;
