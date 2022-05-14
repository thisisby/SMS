import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

// ------------------
//  _Person Table_
// ------------------

// Get person
export const getPerson = async () => {
  try {
    const response = await api.get("/person");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

// Create Person
export const createPerson = async (person) => {
  try {
    await api.post("/person", person);
  } catch (err) {
    console.log(err);
  }
};

// ------------------
//  _PersonStatus Table_
// ------------------

// Get personStatus
export const getPersonStatus = async () => {
  try {
    const response = await api.get("/personStatus");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

// Create personStatus
export const createPersonStatus = async (person) => {
  try {
    await api.post("/personStatus", person);
  } catch (err) {
    console.log(err);
  }
};

// Update personStatus
export const updatePersonStatus = async ({ id, ...person }) => {
  try {
    await api.put(`/personStatus/${id}`, person);
  } catch (err) {
    console.log(err);
  }
};
