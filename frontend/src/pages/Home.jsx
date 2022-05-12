import React from "react";
import { useQuery } from "react-query";
import Template from "../components/templates/Template";
import StudentTracker from "../components/molecules/StudentTracker";
import { api as apish } from "../store/apis";
import * as api from "../store/api";

const Home = () => {
  const { data } = useQuery("person", api.getPerson);
  return (
    <>
      <h1>Hello world</h1>
      {data?.map((d) => d.name)}
      <Template>
        <StudentTracker students={apish} />
      </Template>
    </>
  );
};

export default Home;
