import { Global } from "@emotion/react";
import { global, reset } from "assets";
import { AuthProvider } from "context/AuthContext/AuthProvider";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
  "pk.eyJ1IjoidXp1MjMiLCJhIjoiY2w0b3Mza3R3MDVzbjNpb2RlNzgxNHpoNiJ9.kufFWNChbHrochOE6XXksw";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Global styles={reset} />
    <Global styles={global} />
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
