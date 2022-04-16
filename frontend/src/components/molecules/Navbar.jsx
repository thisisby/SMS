import React from "react";
import { Logo } from "../atoms/Logo";
import MenuItems from "../atoms/MenuItems";
import MoreLink from "../atoms/MoreLink";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 sm:px-10 md:px-20 mb-6 sm:mb-10 border border-white border-b-gray">
      <Logo />
      <MenuItems />
      <MoreLink />
    </div>
  );
};

export default Navbar;
