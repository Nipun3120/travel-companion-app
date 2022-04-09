import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { LoggedInContextProvider } from "./contexts/userLoggedInStatus";
import { CurrentUserContextProvider } from "./contexts/currentUserContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoggedInContextProvider>
        <CurrentUserContextProvider>
          <App />
        </CurrentUserContextProvider>
      </LoggedInContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
