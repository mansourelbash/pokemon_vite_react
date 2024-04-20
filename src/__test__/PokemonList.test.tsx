jest.mock('../css/SkeletonCard.css', () => ({}));
jest.mock('../css/PokemonList.css', () => ({}));
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useGetPokemonListQuery } from '../slices/pokemonListSlice';
import PokemonList from '../views/PokemonList';

jest.mock('../slices/pokemonListSlice', () => ({
  useGetPokemonListQuery: jest.fn(),
}));

describe('PokemonList component', () => {
  test('renders loading state while fetching data', () => {
    // Mock loading state
    (useGetPokemonListQuery as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: true,
      isError: false,
      error: null,
    });

    render(
      <MemoryRouter>
        <PokemonList />
      </MemoryRouter>
    );
    
    expect(screen.getByText('Welcome to Pokemon List')).toBeTruthy();
    expect(screen.queryByText('No Pokemon found')).toBeNull();
  });
});
