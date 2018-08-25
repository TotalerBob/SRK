import React from "react";

class ProfileImpact extends React.Component {
  render() {
    return (
      <div className="profile-card">
        <p>{this.props.items.projectName}</p>
        <p>{this.props.items.desc}</p>
      </div>
    );
  }
}

export default ProfileImpact;
