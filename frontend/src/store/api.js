import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

// Person
export const getPerson = async () => {
  try {
    const response = await api.get("/person");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

//  _Person Status_

// Get personStatus data
export const getPersonStatus = async () => {
  try {
    const response = await api.get("/personStatus");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

// Create personStatus data
export const createPersonStatus = async (person) => {
  try {
    const response = await api.post("/personStatus", person);
  } catch (err) {
    console.log(err);
  }
};

// Update personStatus data
export const updatePersonStatus = async ({ id, ...person }) => {
  console.log("COMMING VALUES:");
  console.log(id);
  console.log(person);
  try {
    const response = await api.put(`/personStatus/${id}`, person);
  } catch (err) {
    console.log(err);
  }
};
