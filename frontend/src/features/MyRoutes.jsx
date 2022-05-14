import React from "react";
import { Routes, Route } from "react-router-dom";

import CreateStudent from "../pages/CreateStudent";
import Home from "../pages/Home";
import OffCamp from "../pages/OffCamp";
import OnCamp from "../pages/OnCamp";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/off" element={<OffCamp />} />
      <Route path="/on" element={<OnCamp />} />
      <Route path="/create" element={<CreateStudent />} />
    </Routes>
  );
};

export default MyRoutes;
