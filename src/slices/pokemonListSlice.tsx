import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PokemonListResponse } from '../types/types';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<PokemonListResponse, { offset?: number; limit?: number }>({
      query: ({ offset = 0, limit = 20 }) => `pokemon?offset=${offset}&limit=${limit}`,
      transformResponse: async (response: PokemonListResponse) => {
        const detailedPokemon = await Promise.all(
          response.results.map(async (pokemon) => {
            const speciesResponse = await fetch(pokemon.url);
            const speciesData = await speciesResponse.json();
            const spriteUrl = speciesData.sprites.front_default;

            return { ...pokemon, spriteUrl };
          })
        );

        return { results: detailedPokemon };
      },
    }),
  }),
});

export const { useGetPokemonListQuery } = pokemonApi;
