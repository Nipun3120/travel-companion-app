import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TopPlaces } from "../Places/TopPlaces";
import Card from "../ui/Card";
import { Navbar } from "../ui/Navbar";

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    if (!uid) {
      navigate("/login");
    }
  }, []);
  // const uid = localStorage.getItem("uid");
  // if(!uid) {
  //      console.log("-----> ", uid)
  //      navigate('/login')
  // }
  return (
    <React.Fragment>
      <Navbar />
      <Grid className="home__container" mt={2}>
          <h4 className="home__heading">Inspiration for your next trip</h4>
          <div className="topPlaces__container">
            <TopPlaces/>
          </div>
      </Grid>
    </React.Fragment>
  );
};
