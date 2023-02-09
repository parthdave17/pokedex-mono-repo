import { createSlice } from "@reduxjs/toolkit";
import { AppState, AppThunk } from "./configure";
import { HYDRATE } from "next-redux-wrapper";
import { PokemonData } from "../pages/[name]";
import { makeAPIcall } from "@pokedex/utils";

const initialState: { data: PokemonData | null } = { data: null };

// Actual Slice
export const pokemonDetailSlice = createSlice({
  name: "pokemonDetail",
  initialState,
  reducers: {
    setPokemonDetail(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload.pokemonDetail,
      };
    });
  },
});

export const { setPokemonDetail } = pokemonDetailSlice.actions;
export default pokemonDetailSlice.reducer;

//selectors
export const selectPokemonDetail = (state: AppState) =>
  state.pokemonDetail.data;

// Thunk
export const fetchPockenDetail =
  (name: string): AppThunk =>
  async (dispatch) => {
    try {
      const res = await makeAPIcall(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      return dispatch(setPokemonDetail(res));
    } catch {
      dispatch(setPokemonDetail(null));
    }
  };
