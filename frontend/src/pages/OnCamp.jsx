import React from "react";
import { useQuery } from "react-query";
import Template from "../components/templates/Template";
import StudentTracker from "../components/molecules/StudentTracker";
import * as api from "../store/api";

const OnCamp = () => {
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

  let filteredData = data?.filter((person) => person.status === "On");
  return (
    <>
      <Template>
        {filteredData?.length > 0 ? (
          <StudentTracker students={filteredData} />
        ) : (
          "Students have not come back"
        )}
      </Template>
    </>
  );
};

export default OnCamp;
