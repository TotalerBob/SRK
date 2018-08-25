import React, { Component } from "react";

export class DonationContainer extends Component {
  constructor() {
    super();

    this.state = {
      currentDonation: 50
    };
  }

  render() {
    return (
      <div className="content donate-page">
        <div className="payment-settings">
          <input
            id="donation-amount"
            type="number"
            defaultValue={this.state.currentDonation}
          />
          <div className="donation-recommendations">
            <button className="donation-recommendations-button" value="50.-" />
            <button className="donation-recommendations-button" value="100.-" />
            <button className="donation-recommendations-button" value="150.-" />
          </div>
          <div className="donation-interval" />
        </div>

        <div>
          <div className="donation-option donation-option-featured" />
          <div className="donation-option" />
        </div>
      </div>
    );
  }
}
