import React from "react";

import FILTER from "./VisibilityFilter";
const FilterButton = ({ changeFilter, activeFilter, filterName }) => {
  return (
    <button
      onClick={() => {
        changeFilter(filterName);
      }}
      disabled={activeFilter === filterName}
    >
      {filterName}
    </button>
  );
};
const Footer = ({ onFilterChange, activeFilter }) => {
  return (
    <div>
      <FilterButton
        changeFilter={onFilterChange}
        activeFilter={activeFilter}
        filterName={FILTER.ALL}
      />
      <FilterButton
        changeFilter={onFilterChange}
        activeFilter={activeFilter}
        filterName={FILTER.COMPLETED}
      />
      <FilterButton
        changeFilter={onFilterChange}
        activeFilter={activeFilter}
        filterName={FILTER.PENDING}
      />
    </div>
  );
};
export default Footer;
