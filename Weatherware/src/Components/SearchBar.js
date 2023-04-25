import React, { useState } from 'react';

const SearchBar = ({ setLocation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setLocation(searchQuery);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Where are you?"
      />
    
    </form>
  );
};

export default SearchBar;
