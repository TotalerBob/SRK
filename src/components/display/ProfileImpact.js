import React from "react";

class ProfileImpact extends React.Component {
  render() {
    return (
      <div
        className="profile-card"
        style={{
          backgroundImage: "url('" + this.props.items.img + "')"
        }}
      >
        <div className="text">
          <p>{this.props.items.projectName}</p>
          <p>{this.props.items.desc}</p>
        </div>
      </div>
    );
  }
}

export default ProfileImpact;
