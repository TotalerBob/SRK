import React, { Component } from "react";
import { DonationRecommendationButton } from "../display/DonationRecommendationButton";
import { DonationCheckbox } from "../display/DonationCheckbox";

export class DonationContainer extends Component {
  constructor() {
    super();

    this.state = {
      currentDonation: 50,
      currentCheckbox: "single"
    };
  }

  setCurrentDonation(amount) {
    this.setState({
      currentDonation: amount,
      currentCheckbox: this.state.currentCheckbox
    });
  }

  setCurrentCheckbox(checkbox) {
    this.setState({
      currentDonation: this.state.currentDonation,
      currentCheckbox: checkbox
    });
  }

  render() {
    return (
      <div className="content donate-page">
        <div className="payment-settings">
          <input
            id="donation-amount"
            type="number"
            value={this.state.currentDonation}
            onChange={() => {
              this.setState({
                currentDonation: document.querySelector("#donation-amount")
                  .value
              });
            }}
          />

          <div className="donation-recommendations">
            <DonationRecommendationButton
              amount={50}
              setValue={amount => {
                this.setCurrentDonation(amount);
              }}
            />
            <DonationRecommendationButton
              amount={100}
              setValue={amount => {
                this.setCurrentDonation(amount);
              }}
            />
            <DonationRecommendationButton
              amount={150}
              setValue={amount => {
                this.setCurrentDonation(amount);
              }}
            />
          </div>
          <DonationCheckbox
            id="single"
            title="Einmalig"
            setValue={checkbox => {
              this.setCurrentCheckbox(checkbox);
            }}
            checked={this.state.currentCheckbox === "single"}
          />
          <DonationCheckbox
            id="monthly"
            title="Monatlich"
            setValue={checkbox => {
              this.setCurrentCheckbox(checkbox);
            }}
            checked={this.state.currentCheckbox === "monthly"}
          />
          <DonationCheckbox
            id="yearly"
            title="Jährlich"
            setValue={checkbox => {
              this.setCurrentCheckbox(checkbox);
            }}
            checked={this.state.currentCheckbox === "yearly"}
          />
          <div className="donation-interval" />
        </div>

        <div>
          <div className="donation-option-featured" />
          <div className="donation-option" />
        </div>
      </div>
    );
  }
}
