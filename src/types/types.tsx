export interface Pokemon {
  id: number | string;
  name: string;
  spriteUrl: string;
  url: string;
}

export interface PokemonDetails extends Pokemon {
  height: number;
  weight: number;
  types: {slot: number; type: PokemonType;};
  sprites: {
    front_default: string; 
    back_default: string; 
  };
}

export interface PokemonListResponse {
  results: Pokemon[];
}

export interface PokemonType {
  name: string;
  url: string;
}

export interface PokemonTypeSlot {
  slot: number;
  type: PokemonType;
}

export interface PokemonTypeSprites{
  front_default: string;
}


export interface TypeSlot {
  slot: number;
  type: PokemonType;
}

export interface PokemonProps {
  pokemonDetails: PokemonDetails;
}

export interface PokemonDetailsComponentProps {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}