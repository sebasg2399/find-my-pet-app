import { useContext } from "react";
import { MyReportsContext } from "./MyReportsContext";

export { MyReportsProvider } from "./MyReportsProvider";

export const useMyReports = () => useContext(MyReportsContext);
