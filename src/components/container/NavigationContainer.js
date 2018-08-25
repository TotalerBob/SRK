import React, { Component } from "react";
import { DonateButton } from "../display/DonateButton";
import { Link } from "react-router-dom";

export class NavigationContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="navigation">
        <DonateButton />
        <Link to="/">HomePage</Link>
      </div>
    );
  }
}
