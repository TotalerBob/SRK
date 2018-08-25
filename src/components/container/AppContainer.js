import React, { Component } from "react";
import { DonationContainer } from "./DonationContainer";

export default class AppContainer extends Component {
    constructor(){
        super();
    }

    render(){
        return (
           <div className="container">
                <div className="content-container">
                </div>
                <div className="navigation">
                    <div className="donate-button"></div>
                </div>
           </div>
        );
    }
}