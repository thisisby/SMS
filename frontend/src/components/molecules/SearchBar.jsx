import React, { useContext } from "react";
import { State } from "../../store/state";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(State);
  return (
    <>
      <input
        className="px-4 py-2 bg-[#F0F4F5] outline-none"
        type="text"
        placeholder="Search...."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </>
  );
};

export default SearchBar;
