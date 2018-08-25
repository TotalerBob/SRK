import React from "react";

export const DonationTile = ({ id, title, checked, setValue, imgUrl }) => (
  <div
    className={"tile donation-option " + (checked && "donation-active")}
    style={{
      backgroundImage: "url(" + imgUrl + ")"
    }}
    onClick={() => {
      setValue(id);
    }}
  >
    <div className="tile-heart" />
    <div className="tile-text font-light">{title}</div>
  </div>
);
