import { getReports, registerReport } from "apifetch/myreports_services";
import React, { useEffect, useReducer } from "react";
import { MyReportsContext, Report } from "./MyReportsContext";
import { MyReportsReducer } from "./MyReportsReducer";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export interface MyReportsState {
  isLoading: boolean;
  reports: Report[];
}

const INITIAL_STATE = {
  isLoading: false,
  reports: [],
};

export const MyReportsProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(MyReportsReducer, INITIAL_STATE);

  const setReports = (reports: Report[]) => {
    dispatch({ type: "setReports", payload: reports });
  };
  const addReport = (body: any, pet_id: number) => {
    registerReport(body, pet_id).then(({ data }) => {
      console.log(data);
    });
  };

  useEffect(() => {
    getReports().then(({ data }) => {
      console.log(data.message);
      console.log(data.reports)
      setReports(data.reports);
    });
  }, []);

  return (
    <MyReportsContext.Provider value={{ ...state, addReport }}>
      {children}
    </MyReportsContext.Provider>
  );
};
