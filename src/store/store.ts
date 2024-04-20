import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from '../slices/pokemonListSlice';
import { pokemonDetailsApi } from '../slices/pokemonDetailsSlice';

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [pokemonDetailsApi.reducerPath]: pokemonDetailsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware, pokemonDetailsApi.middleware),
});
