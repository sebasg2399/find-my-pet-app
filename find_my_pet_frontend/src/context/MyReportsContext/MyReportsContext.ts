import { createContext } from "react";

export interface Report {
  lat: number;
  lng: number;
  user_id: number;
  id: number;
  pet_id: number;
  photo_url: string;
  last_seen: string;
  report_message: string;
  createdAt: string;
}

type MyReportsContextProps = {
  isLoading: boolean;
  reports: Report[];

  addReport: (body: any, pet_id: number)=>void
};

export const MyReportsContext = createContext<MyReportsContextProps>(
  {} as MyReportsContextProps
);
