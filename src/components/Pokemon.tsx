import React from 'react';
import type { PokemonProps, TypeSlot } from '../types/types';
import '../css/Pokemon.css';

const Pokemon: React.FC<PokemonProps> = ({ pokemonDetails }) => (
  <div className="pokemon-container">
    <h2 className="pokemon-name">{pokemonDetails.name}</h2>
    {pokemonDetails.sprites && (
      <img className="pokemon-image" src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
    )}
    <hr />
    <p className="pokemon-info">Name: {pokemonDetails.name}</p>
    <hr />
    <div className="pokemon-info-group">
      <p className="pokemon-info">Height: {pokemonDetails.height}</p>
      <p className="pokemon-info">Weight: {pokemonDetails.weight}</p>
    </div>
    <hr />
    <p className="pokemon-types">Types:</p>
    <ul className="pokemon-types-list">
      {Array.isArray(pokemonDetails?.types) && pokemonDetails?.types.map((typeSlot: TypeSlot, index: number) => (
        <li key={index} className="pokemon-type">{typeSlot.type.name}</li>
      ))}
    </ul>
    <hr />
  </div>
);
export default Pokemon;
