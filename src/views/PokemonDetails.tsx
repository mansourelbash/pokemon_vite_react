
import React, { useEffect } from 'react';
import { useGetPokemonDetailsQuery } from '../slices/pokemonDetailsSlice';
import type { PokemonDetails } from '../types/types';
import { Link, useParams } from 'react-router-dom';
import Pokemon from '../components/Pokemon'; 
import '../css/PokemonDetails.css';

const PokemonDetails: React.FC = () => {
  const { pokemonName } = useParams<{ pokemonName: string | any }>();

  const { data: pokemonDetails, isLoading, isError, error } = useGetPokemonDetailsQuery({ pokemonName, limit: 20, offset: 0 });

  useEffect(() => {
    if (pokemonName) {
      setTimeout(() => {
        useGetPokemonDetailsQuery({ pokemonName, limit: 20, offset: 0 });
      }, 2000);
    }
  }, [pokemonDetails, pokemonName]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="pulse-container">
          <div className="loading-bar loading-bar-long"></div>
          <div className="loading-bar loading-bar-short"></div>
          <div className="loading-bar loading-bar-long"></div>
          <div className="loading-bar-group">
            <div className="loading-bar loading-bar-short"></div>
            <div className="loading-bar loading-bar-short"></div>
          </div>
          <div className="loading-image"></div>
        </div>
    </div>
    );
  }

  if (isError) {
    if ('status' in error && 'data' in error) {
      return <div>Error: {error.status}</div>;
    }
    if ('message' in error) {
      return <div>Error: {error.message}</div>;
    }
    return <div>Error occurred</div>;
  }


  return (
    <div className="container">
      {pokemonDetails && <Pokemon pokemonDetails={pokemonDetails} />}
      <Link className="link" to="/">Back to list</Link>
    </div>
  );
};

export default PokemonDetails;
