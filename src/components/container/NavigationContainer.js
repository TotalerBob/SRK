import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class NavigationContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="navigation">
        <NavLink
          to="/donate"
          activeClassName="navigation-active"
          className="donate-button"
        >
          Spenden
        </NavLink>
        <NavLink
          to="/" 
          exact
          className="navigation-left"
          activeClassName="navigation-active"
        >
          Übersicht
        </NavLink>
        <NavLink
          to="/profile"
          exact
          className="navigation-right"
          activeClassName="navigation-active"
        >
          Profil
        </NavLink>
      </div>
    );
  }
}
