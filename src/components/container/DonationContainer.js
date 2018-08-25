import React, { Component } from "react";
import {DonateButton} from "../display/DonateButton";

export class DonationContainer extends Component {
    constructor(){
        super();

        this.state = {
            "currentDonation" : 50
        }
    }

    render(){
        return (
           <div className="content donate-page">
                <div className="payment-settings">
                    <input id="donation-amount" type="number" defaultValue={this.state.currentDonation}></input>
                    <div className="donation-recommendations">
                        <button className="donation-recommendations-button" value="50.-"></button>
                        <button className="donation-recommendations-button" value="100.-"></button>
                        <button className="donation-recommendations-button" value="150.-"></button>
                    </div>
                    <div className="donation-interval">
                        <DonateButton onClick={() => {console.log("Clicked")}} />
                    </div>
                </div>

                <div>
                    <div className="donation-option donation-option-featured">
                    </div>
                    <div className="donation-option"></div>
                </div>           
           </div>
        );
    }
}