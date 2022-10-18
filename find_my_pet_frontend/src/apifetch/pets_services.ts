import { api } from "./auth_services";

export const getPets = async () => {
  return api.get("/mypets");
};