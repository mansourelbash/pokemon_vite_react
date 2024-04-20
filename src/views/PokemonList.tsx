import React, { useState, useEffect } from 'react';
import { useGetPokemonListQuery } from '../slices/pokemonListSlice';
import { FaSearch } from 'react-icons/fa';
import { FixedSizeGrid } from 'react-window'; 
import { useDebounce } from '../hooks/useDebounce';
import { Link } from 'react-router-dom';
import { Pokemon } from '../types/types';
import SkeletonCard from '../components/SkeletonCard';
import '../css/PokemonList.css'; 

const PokemonList: React.FC = () => {
  const { data: pokemonList, isLoading, isError, error } = useGetPokemonListQuery({ offset: 0, limit: 1000 });
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const [searchResults, setSearchResults] = useState<Pokemon[]>([]);

  useEffect(() => {
    if (!debouncedSearchQuery) {
      setSearchResults(pokemonList?.results || []);
      return;
    }
  
    const results = pokemonList?.results.filter((pokemon: Pokemon) =>
      pokemon.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
    );
    setSearchResults(results || []);
  }, [debouncedSearchQuery, pokemonList]);

  if (!isLoading) {
    return (
      <>
      <div className="container w-[1250px]">
        <h1 className="title">Welcome to Pokemon List</h1>
        <div className="h-9 bg-gray-300 rounded mb-4 w-[250px] mx-auto"></div>
        <div className="card-container">
          {[...Array(18)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
      </>
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

  const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => (
    <div className="card">
      <img src={pokemon.spriteUrl} alt={pokemon.name} className="card-image" />
      <div className="card-name">{pokemon.name}</div>
      <Link to={`/pokemon/${pokemon.name}`} className="card-link">View Details</Link>
    </div>
  );

  return (
    <div className="container">
      <h1 className="title">Welcome to Pokemon List</h1>
      <div className="search-container">
        <div className="relative">
          <input type="text" placeholder="Search Pokemon" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="search-input" />
          <FaSearch className="search-icon" />
        </div>
      </div>

      {searchResults.length > 0 ? (
        <FixedSizeGrid
          columnCount={6} 
          columnWidth={200}
          height={600}
          rowCount={Math.ceil(searchResults.length / 10)} 
          rowHeight={200}
          width={1250}
        >
          {({ columnIndex, rowIndex, style }) => {
            const index = rowIndex * 10 + columnIndex;
            const pokemon = searchResults[index];
            return (
              <div style={style}>
                {pokemon && <PokemonCard key={pokemon.name} pokemon={pokemon} />}
              </div>
            );
          }}
        </FixedSizeGrid>
      ) : (
        <div className="no-pokemon">No Pokemon found</div>
      )}
    </div>
  );
};

export default PokemonList;
