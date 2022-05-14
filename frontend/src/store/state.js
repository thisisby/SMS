import React, { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
export const State = createContext();

export const ContextProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchPerson, setSearchPerson] = useState("");
  const { pathname } = useLocation();

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  // closing Person data on route change
  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);

  return (
    <State.Provider
      value={{
        showMenu,
        setShowMenu,
        showMenuHandler,
        searchTerm,
        setSearchTerm,
        searchPerson,
        setSearchPerson,
      }}
    >
      {children}
    </State.Provider>
  );
};
