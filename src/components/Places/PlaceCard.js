import React from "react";

export const PlaceCard = ({ location, src }) => {
  return (
    <div className="placesCard__card">
      <img src={src} alt="image not found" />
      <div className="placesCard__info">
        <h2>{location}</h2>
      </div>
    </div>
  );
};
