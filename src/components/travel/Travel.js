import { Box, Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import SearchPage from "./Search";
import { TopBar } from "./TopBar";

export const Travel = () => {
  const mode = useSelector((state) => state.search.searchMode);
  return (
    <React.Fragment>
      <h4 className="component__heading">
        Create your own trip<span className="travel__fullstop">.</span>
      </h4>
      <Box>
        <TopBar />
        <div className="bg-neutral-300 rounded-2xl p-2 m-4 flex flex-auto shadow-lg mt-4">
          <div className="flex-1">{mode}</div>
        </div>
      </Box>
    </React.Fragment>
  );
};
