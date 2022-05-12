import React, { useContext } from "react";

import { State } from "../../store/state";
import { useQuery, useMutation } from "react-query";
import * as api from "../../store/api";

const PersonList = () => {
  const { data } = useQuery("person", api.getPerson);
  const { mutate, isSuccess } = useMutation(api.createPersonStatus);

  const { showMenu, showMenuHandler } = useContext(State);

  const AddPersonStatus = (person) => {
    console.log(person);
    let date = new Date();
    let options = {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    let currentTime = date.toLocaleTimeString("en-us", options);
    const newPersonStatus = {
      ...person,
      come: "",
      leave: currentTime,
      status: "On",
    };
    mutate(newPersonStatus);
  };
  return (
    <div
      className={`w-[20rem] bg-white duration-500 ease-in-out fixed top-0 shadow-md ${
        showMenu ? "left-0" : "-left-full"
      } h-screen`}
    >
      <button
        onClick={showMenuHandler}
        className="absolute top-7 right-8 sm:hidden"
      >
        X
      </button>
      <h1 className="mb-10 py-6 px-5 text-xl">Select a student</h1>
      <div>
        {data?.map((person) => (
          <button
            onClick={() => AddPersonStatus(person)}
            key={person.id}
            className="block w-full text-left px-4 py-4 duration-300 hover:bg-[#f6f6f6] capitalize"
          >
            {person.id + ". " + person.full_name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PersonList;
