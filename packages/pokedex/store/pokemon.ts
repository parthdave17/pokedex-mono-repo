import { createSlice } from "@reduxjs/toolkit";
import { AppState, AppThunk } from "./configure";
import { HYDRATE } from "next-redux-wrapper";
import { makeAPIcall } from "@pokedex/utils";

type DataType = {
  name: string;
  url: string;
};

const initialState: { data: DataType[]; count: number; allData: DataType[][] } =
  {
    data: [],
    allData: [],
    count: 0,
  };
// Actual Slice
export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemonList(state, action) {
      state.data = action.payload;
    },
    setAllData(state, action) {
      state.allData = action.payload;
    },
    setCount(state, action) {
      state.count = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action?.payload?.pokemon,
      };
    });
  },
});

export const { setPokemonList, setAllData, setCount } = pokemonSlice.actions;
export default pokemonSlice.reducer;

//selectors
export const selectPokemonListData = (state: AppState) => state.pokemon.data;
export const selectPokemonAllData = (state: AppState) => state.pokemon.allData;
export const selectPokemonCount = (state: AppState) => state.pokemon.count;

// Thunk
export const fetchPockenList =
  (page: any): AppThunk =>
  async (dispatch, getState) => {
    try {
      const allData = getState().pokemon.allData as DataType[][];
      if (page >= 1 && allData[page - 1]) {
        dispatch(setPokemonList(allData[page - 1]));
      } else {
        const { results, count } = await makeAPIcall(
          `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`
        );
        const temp = [...allData, results];
        if (count !== getState().pokemon.count) {
          dispatch(setCount(count));
        }
        dispatch(setAllData(temp));
        dispatch(setPokemonList(results));
      }
    } catch (e) {
      dispatch(setPokemonList([{ name: "Error", ulr: "404 Not Found" }]));
    }
  };
