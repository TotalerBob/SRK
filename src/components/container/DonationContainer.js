import React, { Component } from "react";
import { DonationRecommendationButton } from "../display/DonationRecommendationButton";
import { DonationCheckbox } from "../display/DonationCheckbox";
import { Tile } from "../display/Tile";
import categories from '../../data/categories.json';

export class DonationContainer extends Component {
  constructor() {
    super();
    this.state = {
      currentDonation: 50,
      currentCheckbox: "single",
      currentCategory: "general",
      categories : categories.categories
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

  setCurrentCategory(categoryId) {
    let categories = this.state.categories;
    categories.map((val,key)=>{
      val.checked = (categoryId == val.id) ? true : false;
    });
    let currentState = this.state;
    currentState.categories = categories;
    this.setState(currentState);
  }

  render() {
    return (
      <div className="content donate-page indent-container">
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
            Dort, wo es am nötigsten ist
          </div>
        </div>
        
        {
          this.state.categories.map((val, key) => {
            
            return (
              <Tile
              data={{
                text : val.title,
                image : val.image,
                small : val.small,
                wide : val.wide,
                checked : val.checked,
                id : val.id,
                setActive : (id) => {
                   this.setCurrentCategory(id);
                }
              }}
              />
            )
          })
        }

      </div>
    );
  }
}
