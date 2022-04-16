import React from "react";

import Title from "../atoms/Title";
import SearchBar from "../molecules/SearchBar";


const Template = ({ children }) => {
  return (
    <div className="px-2 sm:px-6 md:px-10 lg:px-20">
      <Title text="Monitoring" />
      <div className="flex justify-between items-center mb-6">
        <SearchBar />
        <button className="bg-green px-4 py-2">+ Add person</button>
      </div>
      {children}
    </div>
  );
};

export default Template;
