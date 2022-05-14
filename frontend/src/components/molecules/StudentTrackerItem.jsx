import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import * as api from "../../store/api";

const StudentTrackerItem = ({ student }) => {
  const { id, full_name, role, phone_number, leave, come, status } = student;
  const { mutateAsync } = useMutation(api.updatePersonStatus);
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  const updatePersonStatus = async (id, student) => {
    let date = new Date();
    let options = {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    let currentTime = date.toLocaleTimeString("en-us", options);
    const updatedPersonStatus = {
      ...student,
      come: currentTime,
      status: "On",
    };
    await mutateAsync({ ...updatedPersonStatus, id });
    queryClient.invalidateQueries("personStatus");
  };

  return (
    <>
      <div
        onClick={openHandler}
        className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-7 gap-5 py-6 px-2 border-b border-gray hover:bg-[#f6f6f6] duration-300 "
      >
        <h3 className="lg:col-span-2">{full_name}</h3>
        <h3 className="hidden md:block">{role}</h3>
        <h3 className="hidden md:block">{phone_number}</h3>
        <h3 className="hidden md:block">{leave}</h3>
        <h3 className="hidden md:block">
          {come === null ? (
            <button
              onClick={() => updatePersonStatus(id, student)}
              className="w-max text-left"
            >
              <span className="bg-blue px-3 py-2 rounded-full ml-6">+</span>
            </button>
          ) : (
            come
          )}
        </h3>
        <h3 className="justify-self-end md:justify-self-start">
          {status === "On" ? (
            <span className="bg-[#92efbf] rounded-full px-4 py-2">On Camp</span>
          ) : (
            <span className="bg-[#f19f9f] rounded-full px-4 py-2">
              Off Camp
            </span>
          )}
        </h3>
      </div>
      {isOpen && (
        <div className="flex flex-col w-full px-2 mt-2 md:hidden">
          <div className="flex justify-between mb-4">
            <span className="font-bold mr-2">Role:</span>
            <span>{role}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-bold mr-2">Phone:</span>
            <span>{phone_number}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-bold mr-2">Leave:</span>
            <span>{leave}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-bold mr-2">Come:</span>
            <span>
              {come === null ? (
                <button
                  onClick={() => updatePersonStatus(id, student)}
                  className="w-max text-left"
                >
                  <span className="bg-blue px-3 py-2 rounded-full">+</span>
                </button>
              ) : (
                come
              )}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentTrackerItem;
