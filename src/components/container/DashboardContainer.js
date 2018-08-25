import React, { Component } from "react";
//import {DonateButton} from "../display/DonateButton";

export class DashboardContainer extends Component {
    constructor(){
        super();
    }

    render(){
        return (
        	<div className="dashboard-wrapper">
        		<div className="row">
        			<div className="row-title">Aktuelle Stories und Projekte</div>
        			<div className="row-scroller">
        				
        				<div className="tile" style={{ backgroundImage : "url(./img/kategorien/das_ambulatorium_fuer_folter_und_kriegsopfer.jpg)"}}>
        					<div className="tile-tag-live">
        						<div className="dot"></div>
        						LIVE
        					</div>
        					<div className="tile-text">
        						Jeder zweite Syrer ist auf der Flucht, etwa die Hälfte der Betroffenen sind Kinder. 
        					</div>
        				</div>
        				

        				<div className="tile" style={{ backgroundImage : "url(./img/kategorien/das_ambulatorium_fuer_folter_und_kriegsopfer.jpg)"}}>
        					<div className="tile-tag">STORY</div>
        					<div className="tile-text">
        						Jeder zweite Syrer ist auf der Flucht, etwa die Hälfte der Betroffenen sind Kinder. 
        					</div>
        				</div>
        			</div>
        		</div>
        	</div>
        );
    }
}