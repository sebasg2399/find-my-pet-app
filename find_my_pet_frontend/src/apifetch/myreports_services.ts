import { api } from "./auth_services";

export const getReports = async () => {
  return api.get("/myreports");
};
export const registerReport = async (body: any, pet_id: number) => {
  return api.post(`/mypets/createreport/${pet_id}`, body);
};
