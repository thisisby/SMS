import React from "react";
import { useQuery } from "react-query";
import Template from "../components/templates/Template";
import StudentTracker from "../components/molecules/StudentTracker";
import * as api from "../store/api";

const OffCamp = () => {
  const { data, isLoading, isError } = useQuery(
    "personStatus",
    api.getPersonStatus
  );

  if (isLoading) {
    return "Loading students...";
  }
  if (isError) {
    return "Something went wrong!";
  }

  let filteredData = data?.filter((person) => person.status === "Off");
  return (
    <>
      <Template>
        {filteredData?.length > 0 ? (
          <StudentTracker students={filteredData} />
        ) : (
          "All students are on campus"
        )}
      </Template>
    </>
  );
};

export default OffCamp;
