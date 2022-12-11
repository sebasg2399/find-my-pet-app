import { NavBar } from "components/UI/NavBar";
import { MyReportsProvider } from "context/MyReportsContext";
import { PetsProvider } from "context/PetsContext/";
import { AppLayout } from "layouts/AppLayout";
import { MyPetsPage } from "pages/MyPetsPage";
import { MyReportsPage } from "pages/MyReportsPage";
import { PetsRegister } from "pages/Pets/PetsRegister";
import { ReportRegister } from "pages/Reports/ReportRegister";
import React from "react";
import { Route, Routes } from "react-router-dom";

export const AuthorizedApp = () => {
  return (
    <AppLayout>
      <PetsProvider>
        <MyReportsProvider>
          <Routes>
            <Route path="/mypets" element={<MyPetsPage />} />
            <Route path="/mypets/register" element={<PetsRegister />} />
            <Route
              path="/myreports/register/:pet_id"
              element={<ReportRegister />}
            />
            <Route path="/myreports" element={<MyReportsPage />} />
          </Routes>
          <NavBar />
        </MyReportsProvider>
      </PetsProvider>
    </AppLayout>
  );
};
