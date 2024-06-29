import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import PokemonList from './PokemonList';

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm.trim() === '') {
        // If search term is empty, reset pokemonData
        setPokemonData([]);
        return;
      }

      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
        setPokemonData([response.data]);
      } catch (error) {
        console.error('Error fetching data:', error);
        setPokemonData([]); // Reset pokemonData on error
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div>
      <h1>Pokémon Search</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <PokemonList pokemonData={pokemonData} />
    </div>
  );
};

export default App;
