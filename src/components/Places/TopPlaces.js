import { Grid } from "@mui/material";
import React from "react";
import { PlaceCard } from "./PlaceCard";
import img1 from '../../assets/place_1.webp';
import img2 from '../../assets/place_2.webp';
import img3 from '../../assets/place_3.webp';
import img4 from '../../assets/place_4.webp';

const LOCATIONS = [
  ["Manali", img1],
  ["Leh", img2],
  ["Lonavala", img3],
  ["Rishikesh", img4],
];
export const TopPlaces = () => {

  return (
    <Grid container spacing={2}>
      {LOCATIONS.map(item => {
          //  console.log(item)
        return (<Grid item xs={3}>
             {/* <img src={item[1]} alt="image not found"></img> */}
          <PlaceCard location={item[0]} src={item[1]}/>
        </Grid>)
      })}
    </Grid>
  );
};
