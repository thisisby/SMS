import React, { useContext } from "react";

import { State } from "../../store/state";

import Title from "../atoms/Title";
import SearchBar from "../molecules/SearchBar";

const Template = ({ children }) => {
  const { showMenu, showMenuHandler } = useContext(State);

  return (
    <div className="px-2 sm:px-6 md:px-10 lg:px-20 relative">
      <Title text="Monitoring" />
      <div className="flex justify-between items-center mb-6">
        <SearchBar type="personStatus" />
        <button onClick={showMenuHandler} className="bg-green px-4 py-2">
          {showMenu ? "Close" : "+ Add student"}
        </button>
      </div>
      {children}
    </div>
  );
};

export default Template;
