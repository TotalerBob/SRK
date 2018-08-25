import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavigationContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="navigation">
        <Link to="/donate" className="donate-button" />
        <Link to="/explore" className="navigation-left" />
        <Link to="/profile" className="navigation-right" />
      </div>
    );
  }
}
