import React, { useContext } from "react";
import { State } from "../../store/state";

const SearchBar = ({ type }) => {
  const { searchTerm, setSearchTerm, searchPerson, setSearchPerson } =
    useContext(State);
  if (type === "personStatus") {
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
  } else {
    return (
      <>
        <input
          className="px-4 py-2 bg-[#F0F4F5] outline-none"
          type="text"
          placeholder="Search...."
          value={searchPerson}
          onChange={(event) => setSearchPerson(event.target.value)}
        />
      </>
    );
  }
};

export default SearchBar;
