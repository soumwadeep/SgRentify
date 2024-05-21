import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://localhost:8700/api",
  withCredentials: true,
});

export default apiRequest;