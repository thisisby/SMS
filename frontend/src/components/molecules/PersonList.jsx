import React, { useContext } from "react";

import { State } from "../../store/state";
import { useQuery } from "react-query";
import * as api from "../../store/api";

const PersonList = () => {
  const { data } = useQuery("person", api.getPerson);
  const { showMenu } = useContext(State);
  return (
    <div
      className={`w-[20rem] bg-white duration-500 ease-in-out absolute top-0 ${
        showMenu ? "left-0" : "-left-full"
      } h-screen`}
    >
      <h1 className="mb-10 py-6 px-5 text-xl">Select a student</h1>
      <div>
        {data?.map((d) => (
          <button
            key={d.id}
            className="block w-full text-left px-4 py-4 duration-300 hover:bg-[#f6f6f6] capitalize"
          >
            {d.id + ". " + d.full_name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PersonList;
