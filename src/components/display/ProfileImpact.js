import React from "react";

class ProfileImpact extends React.Component {
  render() {
    return (
      <div className="profile-card" style={{ backgroundImage: "url('./src/img/stories/"+ this.props.items.img +"')" }} >
        <p>{this.props.items.projectName}</p>
        <p>{this.props.items.desc}</p>
        <div>{'src/img/stories/' + this.props.items.img}</div>
      </div>
    );
  }
}

export default ProfileImpact;
