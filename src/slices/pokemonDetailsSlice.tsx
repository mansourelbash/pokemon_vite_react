import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { PokemonDetails } from '../types/types';

export const pokemonDetailsApi = createApi({
  reducerPath: 'pokemonDetailsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonDetails: builder.query<PokemonDetails, { pokemonName: string; limit?: number; offset?: number }>({
      query: ({ pokemonName, limit = 20, offset = 0 }) => `pokemon/${pokemonName}/?limit=${limit}&offset=${offset}`,
    }),
  }),
});

export const { useGetPokemonDetailsQuery } = pokemonDetailsApi;
