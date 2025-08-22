import axios from "axios";

const API = axios.create({
  baseURL: "https://levitation-assignment-j77n.onrender.com/api", // backend URL
});

// Add token to requests if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
