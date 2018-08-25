import React from "react";

export const DonationRecommendationButton = ({ amount, setValue }) => (
  <button
    className="donation-recommendations-button"
    onClick={() => {
      setValue(amount);
    }}
  >
    {amount + ".-"}
  </button>
);
