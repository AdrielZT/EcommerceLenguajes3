import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = () => {
    onSearch({ searchTerm, minPrice, maxPrice, category });
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        type="number"
        className="form-control mb-2"
        placeholder="Precio mínimo"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="number"
        className="form-control mb-2"
        placeholder="Precio máximo"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Categoría"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        Filtrar
      </button>
    </div>
  );
};

export default SearchBar;
