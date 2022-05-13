import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

// Person
export const getPerson = async () => {
  try {
    const response = await api.get("/person");
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

// Person Status
export const getPersonStatus = async () => {
  try {
    const response = await api.get("/personStatus");
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const createPersonStatus = async (person) => {
  try {
    const response = await api.post("/personStatus", person);
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};
