import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const getUser = async () => {
  return api.get("/profile");
};

export const login = async (body: any) => {
  return api.post("/login", body);
};

export const register = async (body: any) => {
  return api.post("/signup", body);
};
