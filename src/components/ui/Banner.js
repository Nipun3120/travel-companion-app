import React, { useState } from "react";
import "../../App.css";
import { Search } from "../";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function Banner() {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}

        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button onClick={() => navigate("/search")} variant="outlined">
          Explore Premium Stays
        </Button>
      </div>
    </div>
  );
}

export default Banner;
