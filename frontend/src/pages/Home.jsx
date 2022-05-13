import React, { useEffect } from "react";
import { useQuery } from "react-query";
import Template from "../components/templates/Template";
import StudentTracker from "../components/molecules/StudentTracker";
import * as api from "../store/api";

const Home = () => {
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
  return (
    <>
      <Template>
        {data != null ? (
          <StudentTracker students={data} />
        ) : (
          "No students left campus"
        )}
      </Template>
    </>
  );
};

export default Home;
