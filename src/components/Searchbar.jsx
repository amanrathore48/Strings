import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FiSearch } from "react-icons/fi";
import {
  SearchForm,
  SearchInput,
  SearchInputCon,
  SearchLabel,
} from "./Styles/GlobalStyles";

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  };

  return (
    <SearchForm onSubmit={handleSubmit} autoComplete="off">
      <SearchLabel htmlFor="search-field">Search all files</SearchLabel>
      <SearchInputCon>
        <FiSearch aria-hidden="true" className="w-5 h-5 ml-4" />
        <SearchInput
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-white p-4"
          placeholder="Search"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchInputCon>
    </SearchForm>
  );
};

export default Searchbar;
