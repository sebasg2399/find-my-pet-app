import { AuthorizedApp } from "AuthorizedApp";
import { AppLayout } from "layouts/AppLayout";
import React from "react";
import { UnauthorizedApp } from "UnauthorizedApp";
import { NavBar } from "./components/UI/NavBar";

function App() {
  return <UnauthorizedApp />;
}

export default App;
