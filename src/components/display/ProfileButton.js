import React from "react";
import { Link } from "react-router-dom";

class ProfileButton extends React.Component {
  render() {
    return (
      <Link to="./profileAll">
      <button
        className="myDonation-button"
      >
        Alle Spenden
      </button>
      </Link>
    );
  }
}

export default ProfileButton;
