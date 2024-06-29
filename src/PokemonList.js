import React from 'react';

const PokemonList = ({ pokemonData }) => {
  return (
    <div>
      <h1>Pokémon List</h1>
      <ul>
        {pokemonData.map(pokemon => (
          <li key={pokemon.id}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
