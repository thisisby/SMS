import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

// Person
export const getPerson = () => {
  return api.get("/person").then((res) => res.data);
};

// Person Status
export const createPersonStatus = (person) => {
  console.log(person);
  api.post("/personStatus", person).then((res) => res.data);
};
