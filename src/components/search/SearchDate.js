import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import PeopleIcon from "@mui/icons-material//People";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker
        ranges={[selectionRange]}
        className="search_rangePicker"
        onChange={handleSelect}
      />
      <div className="search_people">
        <h2>
          Number of guests <PeopleIcon />
        </h2>
        <input min={0} defaultValue={2} type="number" />
        <Button style={{ border: "none" }} onClick={() => navigate("/search")}>
          Search
        </Button>
      </div>
    </div>
  );
};
