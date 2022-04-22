import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchMode } from "../../slices/search";

const modes = ["Location", "Flight", "Bus", "Train"];
export const TopBar = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.search.searchMode);
  const handleModeSelect = (event) => {
    dispatch(setSearchMode(event.target.innerHTML));
  };
  return (
    <React.Fragment>
      <div className="flex min-w-min px-60">
        {modes.map((value, index) => {
          return (
            <h5
              className="travel__searchMode flex-1 p-2 cursor-pointer w-32 mx-5"
              key={index}
              style={{
                color: mode === value ? "#ff385b" : "#000",
                fontSize: mode === value ? "1.1rem" : "1rem",
                borderBottom: mode === value ? "2px solid #ff385b" : "none",
              }}
              onClick={handleModeSelect}
            >
              {value}
            </h5>
          );
        })}
      </div>
    </React.Fragment>
  );
};
