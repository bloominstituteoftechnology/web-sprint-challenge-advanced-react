import React from "react";

export default function FilterForm({ setSearch }) {
  const savedSearchValue = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form>
      <input type="search" placeholder="Search " onChange={savedSearchValue} />
    </form>
  );
}
