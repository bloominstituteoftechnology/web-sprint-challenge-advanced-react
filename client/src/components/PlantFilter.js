import React from "react";
import PlantList from "./PlantList";

const PlantFilter = ({ inputValue, plants }) => {
  //   const filter = (searchValue) => {
  //     plants.filter((item) => item.contains(searchValue));
  //   };
  return (
    <label htmlFor="filter">
      Search
      <input
        type="text"
        id="filter"
        name="filter"
        placeholder="Filter By"
        value={inputValue}
        onChange={filter(inputValue)}
      />
    </label>
  );
};

export default PlantFilter;
