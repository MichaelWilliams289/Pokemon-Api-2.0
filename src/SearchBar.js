import React, { useState } from 'react';

const SearchBar = ({ setSearchTerm }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(input.trim()); // Trimming whitespace from the input
    setInput(''); // Clearing the input field after submission
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter Pokémon name or ID"
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '300px',
          marginRight: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />
      <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
