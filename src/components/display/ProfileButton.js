import React from "react";

class ProfileButton extends React.Component {
  render() {
    return (
      <button
        className="myDonation-button"
        onClick = {this.props.handler}
      >
        Alle Spenden
      </button>
    );
  }
}

export default ProfileButton;
