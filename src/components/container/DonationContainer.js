import React, { Component } from "react";
import { DonationRecommendationButton } from "../display/DonationRecommendationButton";
import { DonationCheckbox } from "../display/DonationCheckbox";
import { DonationTile } from "../display/DonationTile";

export class DonationContainer extends Component {
  constructor() {
    super();

    this.state = {
      currentDonation: 50,
      currentCheckbox: "single",
      currentCategory: "general"
    };
  }

  setCurrentDonation(amount) {
    this.setState({
      currentDonation: amount,
      currentCheckbox: this.state.currentCheckbox,
      currentCategory: this.state.currentCategory
    });
  }

  setCurrentCheckbox(checkbox) {
    this.setState({
      currentDonation: this.state.currentDonation,
      currentCheckbox: checkbox,
      currentCategory: this.state.currentCategory
    });
  }

  setCurrentCategory(category) {
    this.setState({
      currentDonation: this.state.currentDonation,
      currentCheckbox: this.state.currentCheckbox,
      currentCategory: category
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
        </div>
        <p className="donation-divider">Wohin soll die Spende gehen?</p>
        <div>
          <div
            className={
              "donation-option-featured " +
              (this.state.currentCategory === "general" && "donation-active")
            }
            onClick={() => {
              this.setCurrentCategory("general");
            }}
          >
            Dort wo es am nötigsten ist
          </div>
        </div>
        <DonationTile
          checked={this.state.currentCategory === "test"}
          id="test"
          imgUrl="./src/img/kategorien/fluechtlinge_in_asien_brauchen_hilfe.jpg"
          setValue={category => {
            this.setCurrentCategory(category);
          }}
          title="Flüchtlinge in Asien brauchen Hilfe."
        />
        <DonationTile
          checked={this.state.currentCategory === "test2"}
          id="test2"
          imgUrl="./src/img/kategorien/hilfe_fuer_familien_in_der_schweiz.jpg"
          setValue={category => {
            this.setCurrentCategory(category);
          }}
          title="Hilfe für Familien in der Schweiz."
        />
        <DonationTile
          checked={this.state.currentCategory === "test2"}
          id="test2"
          imgUrl="./src/img/kategorien/hunger_in_afrika.jpg"
          setValue={category => {
            this.setCurrentCategory(category);
          }}
          title="Afrika hat Hunger."
        />
        <DonationTile
          checked={this.state.currentCategory === "test2"}
          id="test2"
          imgUrl="./src/img/kategorien/licht_in_das_leben_der_aermsten_bringen.jpg"
          setValue={category => {
            this.setCurrentCategory(category);
          }}
          title="Licht in das Leben der Ärmsten bringen."
        />
      </div>
    );
  }
}
