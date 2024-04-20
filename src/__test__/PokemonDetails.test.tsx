jest.mock('../css/Pokemon.css', () => ({}));
jest.mock('../css/PokemonDetails.css', () => ({}));
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import PokemonDetails from '../views/PokemonDetails';
import { useGetPokemonDetailsQuery } from '../slices/pokemonDetailsSlice';

jest.mock('../slices/pokemonDetailsSlice', () => ({
  useGetPokemonDetailsQuery: jest.fn(),
}));

describe('PokemonDetails component', () => {
  test('renders PokemonDetails component with loading state', () => {
    // Mock useParams hook
    const mockUseParams = jest.fn().mockReturnValue({ pokemonName: 'pikachu' });
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: mockUseParams,
    }));

    render(
      <MemoryRouter initialEntries={['/pokemon/pikachu']}>
        <Routes>
        <Route path="/pokemon/:pokemonName" element={<PokemonDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect((screen.getByText('Loading...') as any).toBeInTheDocument()).toBeTruthy();
  });
});
