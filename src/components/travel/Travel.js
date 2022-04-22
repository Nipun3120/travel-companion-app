import { Box, Container } from "@mui/material";
import React from "react";
import SearchPage from "./Search";
import { TopBar } from "./TopBar";

export const Travel = () => {
  return (
  <React.Fragment>
     <h4 className="component__heading">Create your own trip<span className="travel__fullstop">.</span></h4>
       <Box>
          <TopBar/>
     <div className="bg-neutral-300 rounded-2xl p-2 m-4 flex flex-auto shadow-lg mt-4">
          <div className="flex-1">one</div>
          <div className="flex-1">two</div>
     </div>
     </Box>
  </React.Fragment>
  );
};
