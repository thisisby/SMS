import React from "react";

import { NavLink } from "react-router-dom";

const MenuItems = () => {
  return (
    <div className="flex">
      <NavLink
        className="mr-4 py-4 lg:py-6 block border-2 border-white duration-500 hover:border-b-blue"
        style={({ isActive }) =>
          isActive
            ? { borderBottomColor: "#55CFDE" }
            : { borderBottomColor: "" }
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="mr-4 py-4 lg:py-6 block  border-2 border-white duration-500 hover:border-b-blue"
        to="/off"
        style={({ isActive }) =>
          isActive
            ? { borderBottomColor: "#55CFDE" }
            : { borderBottomColor: "" }
        }
      >
        Off camp
      </NavLink>
      <NavLink
        className="py-4 lg:py-6 block border-2 border-white duration-500 hover:border-b-blue"
        to="/on"
        style={({ isActive }) =>
          isActive
            ? { borderBottomColor: "#55CFDE" }
            : { borderBottomColor: "" }
        }
      >
        On camp
      </NavLink>
    </div>
  );
};

export default MenuItems;
