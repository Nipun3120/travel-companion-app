import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Signup } from "../components";
import { Login } from "../components/auth/Login";

// export default function routeComponents() {
//   return getRouteOrLogin(getAppropriateRoutes());
// }

export const getAppropriateRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/" element={<Home />}/>
    </Routes>
  );
}

// const getRouteOrLogin = (component) => {
//   return localStorage.getItem("uid") ? (
//     component
//   ) : (
//     <Routes>

//     </Routes>
//     );
//   }
  
