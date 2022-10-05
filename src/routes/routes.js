import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  TripHost,
  Home,
  PasswordReset,
  SearchPage,
  Signup,
} from "../components";
import { Login } from "../components/auth/Login";
import Banner from "../components/ui/Banner";
import { Header } from "../components/ui/Header";
import { PrivateRoute } from "./PrivateRoutes";

export const getAppropriateRoutes = () => {
  return (
    <>
      {/* <Banner /> */}
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/create-your-own-trip" element={<TripHost />} />
        </Route>

        <Route path="/login/password_reset" element={<PasswordReset />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* <Route path="/" element={<Home/>}/> */}
        {/* <Route path="/" element={<PrivateRoute />}>
        <Route element={< Home />}/>
      </Route> */}
      </Routes>
    </>
  );
};
