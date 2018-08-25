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
        <Link to="/" className="navigation-left">
          HomePage
        </Link>
        <Link to="/" className="navigation-right">
          Irgendwohin
        </Link>
      </div>
    );
  }
}
