import React from "react";

import Template from "../components/templates/Template";
import StudentTracker from "../components/molecules/StudentTracker";
import { api } from "../store/apis";

const Home = () => {
  return (
    <>
      <Template>
        <StudentTracker students={api} />
      </Template>
    </>
  );
};

export default Home;
