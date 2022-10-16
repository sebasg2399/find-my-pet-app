import { AuthLayout } from "layouts/AuthLayout";
import { LoginPage } from "pages/LoginPage";
import React from "react";

export const UnauthorizedApp = () => {
  return (
    <AuthLayout>
      <LoginPage />
    </AuthLayout>
  );
};
