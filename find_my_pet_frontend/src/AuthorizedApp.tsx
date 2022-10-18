import { NavBar } from "components/UI/NavBar";
import { PetsProvider } from "context/PetsContext/";
import { AppLayout } from "layouts/AppLayout";
import { MyPetsPage } from "pages/MyPetsPage";
import React from "react";
import { Route, Routes } from "react-router-dom";

export const AuthorizedApp = () => {
  return (
    <AppLayout>
      <PetsProvider>
        <NavBar />
        <Routes>
          <Route path="/home" element={<MyPetsPage />} />
        </Routes>
      </PetsProvider>
    </AppLayout>
  );
};
