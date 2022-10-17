import { AuthorizedApp } from "AuthorizedApp";
import { useAuth } from "context/AuthContext";
import { AppLayout } from "layouts/AppLayout";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { UnauthorizedApp } from "UnauthorizedApp";
import { NavBar } from "./components/UI/NavBar";

function App() {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      {user ? <AuthorizedApp /> : <UnauthorizedApp />}
    </BrowserRouter>
  );
}

export default App;
