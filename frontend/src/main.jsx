import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { WorkoutContextProvider } from "./context/WorkoutContext";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <WorkoutContextProvider>
          <App />
        </WorkoutContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
