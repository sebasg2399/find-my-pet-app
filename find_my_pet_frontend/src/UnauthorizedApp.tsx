import { useAuth } from "context/AuthContext";
import { AuthLayout } from "layouts/AuthLayout";
import { LoginPage } from "pages/LoginPage";
import { RegisterPage } from "pages/RegisterPage";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export const UnauthorizedApp = () => {
  const { user } = useAuth();
  return (
    <AuthLayout>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={user ? <Navigate to="/" /> : <LoginPage />} />
      </Routes>
    </AuthLayout>
  );
};
