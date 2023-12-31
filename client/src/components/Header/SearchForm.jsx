import React from "react";

const SearchForm = () => {
  return (
    <form className="d-flex ms-auto" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn custom-btn" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
