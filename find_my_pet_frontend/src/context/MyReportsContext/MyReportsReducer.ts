import { Report } from "./MyReportsContext";
import { MyReportsState } from "./MyReportsProvider";

type MyReportsAction = {
  type: "setReports";
  payload: Report[];
}|{
  type: "addReport";
  payload: Report
};

export const MyReportsReducer = (
  state: MyReportsState,
  action: MyReportsAction
): MyReportsState => {
  switch (action.type) {
    case "setReports":
      return { isLoading: false, reports: action.payload };
    case "addReport":
      return {...state, reports: [...state.reports, action.payload]}
  }

};
