import React from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ searchValue, onSearch }) => {
  return (
    <div className={css.searchContainer}>
      <label className={css.searchLabel}>
        <span className={css.searchSpan}>Find contacts by name</span>
        <input
          className={css.searchInput}
          type="text"
          value={searchValue}
          onChange={(event) => onSearch(event.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBox;
