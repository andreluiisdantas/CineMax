import React, { useState } from "react";
import './SearchBar.css'

type SearchBarProps = {
    onSearchSubmit: (query: string) => void;
    placeholder: string
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchSubmit, placeholder }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearchSubmit(query);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <form className="searchBarForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="searchInput"
        value={query}
        onChange={handleChange}
        placeholder={placeholder || "Buscar filmes..."}
      />
      <button type="submit" className="searchButton">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;