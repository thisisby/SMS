import React, { createContext, useState } from "react";

export const State = createContext();

export const ContextProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };
  return (
    <State.Provider value={{ showMenu, showMenuHandler }}>
      {children}
    </State.Provider>
  );
};
