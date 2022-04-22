import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { TopPlaces } from "../Places/TopPlaces";
import { Header } from "../ui/Header";
import { Travel } from "../travel/Travel";

export const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Grid className="home__container" mt={2}>
        <div className="topPlaces__container">
          <TopPlaces />
        </div>
        <div className="w-full" style={{ marginTop: "30px" }}>
          <Travel />
        </div>
      </Grid>
    </React.Fragment>
  );
};
