import { Pet } from "context/PetsContext/PetsContext";
import { api } from "./auth_services";

export const getPets = async () => {
  return api.get("/mypets");
};
export const registerPet = async (body: Partial<Pet>) => {
  return api.post("/mypets", body);
};
