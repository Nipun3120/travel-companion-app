import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { TopPlaces } from "../Places/TopPlaces";
import { Header } from "../ui/Header";


export const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Grid className="home__container" mt={2}>
          <h4 className="home__heading">Inspiration for your next trip</h4>
          <div className="topPlaces__container">
            <TopPlaces/>
          </div>
      </Grid>
    </React.Fragment>
  );
};
