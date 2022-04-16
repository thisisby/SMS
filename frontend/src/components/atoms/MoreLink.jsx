import React, { useState } from "react";

import { Link } from "react-router-dom";

const MoreLink = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <button onClick={handleOpen} className="relative">
        More
        <div
          className={`${
            open ? "visible" : "invisible"
          } absolute -bottom-20 lg:-bottom-24 -left-20 flex flex-col items-start bg-white shadow-md py-2 px-4 md:px-6 rounded w-max`}
        >
          <Link to="/create">Add Student</Link>
          <Link to="/">Logout</Link>
        </div>
      </button>
    </>
  );
};

export default MoreLink;
