import { AuthLayout } from "layouts/AuthLayout";
import { LoginPage } from "pages/LoginPage";
import { RegisterPage } from "pages/RegisterPage";
import React from "react";
import { Route, Routes } from "react-router-dom";

export const UnauthorizedApp = () => {
  return (
    <AuthLayout>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route  path="/login" element={<LoginPage />} />
        <Route  index element={<LoginPage />} />
      </Routes>
    </AuthLayout>
  );
};
