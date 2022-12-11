import { Report } from "context/MyReportsContext/MyReportsContext";
import { usePets } from "context/PetsContext";
import React, { useCallback, useMemo } from "react";

type Props = {
  report: Report;
};

export const ReportCard = ({ report }: Props) => {
  const { findPet } = usePets();
  const pet = useMemo(() => findPet(report.pet_id), []);
  return <div>{pet?.photo_url}</div>;
};
