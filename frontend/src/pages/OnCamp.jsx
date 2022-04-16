import React from "react";

import Template from "../components/templates/Template";
import StudentTracker from "../components/molecules/StudentTracker";
import { api } from "../store/apis";

const OnCamp = () => {
  const students = api.filter((student) => student.status === true);
  return (
    <>
      <Template>
        <StudentTracker students={students} />
      </Template>
    </>
  );
};

export default OnCamp;
