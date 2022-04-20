import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Signup } from "./components";
import { Container } from "@mui/material";
import routeComponents, { getAppropriateRoutes } from "./routes/routes";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      {/* <Container>{routeComponents()}</Container> */}
      <>{getAppropriateRoutes()}</>
    </div>
  );
}

export default App;
