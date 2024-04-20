jest.mock('../css/Pokemon.css', () => ({}));

import { render, screen } from '@testing-library/react';
import Pokemon from '../components/Pokemon';
import { PokemonDetails } from '../types/types';

describe('Pokemon component', () => {
  const mockPokemonDetails: PokemonDetails = {
    id: 1,
    name: 'Pikachu',
    spriteUrl: 'pikachu.png', 
    url: 'pikachu-url',
    sprites: { front_default: 'pikachu.png', back_default: '' },
    height: 40,
    weight: 6,
    types: [{ slot: 1, type: { name: 'Electric', url: 'electric-url' } }],
  };

  it('renders Pokemon types correctly', () => {
    render(<Pokemon pokemonDetails={mockPokemonDetails} />);
    expect(screen.getByText('Types:')).toBeTruthy();
    expect(screen.getByText('Electric')).toBeTruthy();
  });
});
