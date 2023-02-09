import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { pokemonSlice } from "./pokemon";
import { pokemonDetailSlice } from "./pokemonDetail";
import { createWrapper } from "next-redux-wrapper";

export const makeStore = () =>
  configureStore({
    reducer: {
      [pokemonSlice.name]: pokemonSlice.reducer,
      [pokemonDetailSlice.name]: pokemonDetailSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
