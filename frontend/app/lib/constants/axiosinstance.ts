import axios from "axios";

const instance = axios.create({
  baseURL: "https://qa-testing-y6ws.onrender.com",
});

export const token = (token?: string) => {
  // checking if token was passed in, and deleted it if function was called with zero args
  if (!token) return (instance.defaults.headers.common.Authorization = "");
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export default instance;
