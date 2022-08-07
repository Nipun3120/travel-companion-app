import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { TopPlaces } from "../Places/TopPlaces";
import { Travel } from "../travel/Travel";

export const TripHost = () => {
  return (
    <React.Fragment>
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
