import React, { useContext } from "react";

import { State } from "../../store/state";
import { useQuery, useMutation, useQueryClient } from "react-query";
import * as api from "../../store/api";

import SearchBar from "./SearchBar";

const PersonList = () => {
  const { data } = useQuery("person", api.getPerson);
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(api.createPersonStatus);

  const { showMenu, showMenuHandler, searchPerson, setSearchPerson } =
    useContext(State);

  const AddPersonStatus = async (person) => {
    showMenuHandler();
    setSearchPerson("");
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
      status: "Off",
    };
    await mutateAsync(newPersonStatus);
    queryClient.invalidateQueries("personStatus");
  };
  return (
    <div
      className={`w-full sm:w-[20rem] bg-white duration-300 ease-in-out fixed top-0 shadow-md ${
        showMenu ? "left-0" : "-left-full"
      } h-screen`}
    >
      <button
        onClick={showMenuHandler}
        className="absolute top-7 right-8 sm:hidden"
      >
        X
      </button>
      <h1 className="mb-3 py-6 px-5 text-xl">Select a student</h1>
      <div className="px-5 mb-6">
        <SearchBar type="person" />
      </div>
      <div>
        {data
          ?.filter((val) => {
            if (searchPerson === "") {
              return val;
            } else if (
              val.full_name.toLowerCase().includes(searchPerson.toLowerCase())
            ) {
              return val;
            }
            return false;
          })
          .map((person, index) => (
            <button
              onClick={() => AddPersonStatus(person)}
              key={person.id}
              className="block w-full text-left px-4 py-4 duration-300 hover:bg-[#f6f6f6] capitalize"
            >
              {index + 1 + ". " + person.full_name}
            </button>
          ))}
      </div>
    </div>
  );
};

export default PersonList;
