import React from "react";

export const DonationCheckbox = ({ id, title, checked, setValue }) => (
  <div
    className="donation-interval"
    onClick={() => {
      setValue(id);
    }}
  >
    <input type="checkbox" name={id} checked={checked} onChange={() => {}} />
    <label htmlFor={id}>{title}</label>
    <div className="checkmark"></div>
  </div>
);
