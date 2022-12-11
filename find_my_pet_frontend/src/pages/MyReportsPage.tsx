import styled from "@emotion/styled";
import { colors } from "assets";
import { ReportCard } from "components/ReportCard";
import { useMyReports } from "context/MyReportsContext";
import React from "react";


const StyledMain = styled.main`
  padding: 2rem;
  background-color: ${colors.yellow.light};
`

export const MyReportsPage = () => {
  const { reports } = useMyReports();
  return (
    <StyledMain>
      My Reports:
      {reports.map((report) => (
        <ReportCard key={report.id} report={report} />
      ))}
    </StyledMain>
  );
};
