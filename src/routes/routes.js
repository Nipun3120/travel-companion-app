import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Signup } from "../components";
import { Login } from "../components/auth/Login";
import { PrivateRoute } from "./PrivateRoutes";

export const getAppropriateRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/" element={<PrivateRoute />}>
        <Route element={< Home />}/>
      </Route> */}
    </Routes>
  );
}
