import React, { Component } from "react";
//import {DonateButton} from "../display/DonateButton";

export class DashboardContainer extends Component {
    constructor(){
        super();
    }

    render(){
        return (
        	<div className="dashboard-wrapper">
        		<div className="dashboard-row">
        			<div className="dashboard-row-title">Aktuelle Stories und Projekte</div>
        			<div className="dashboard-row-scroller">
        				
        				<div className="dashboard-row-tile" style={{ backgroundImage : "url(./img/kategorien/das_ambulatorium_fuer_folter_und_kriegsopfer.jpg)"}}>
        					<div className="dashboard-row-live">
        						<div className="dashboard-row-live-dot"></div>
        						LIVE
        					</div>
        					<div className="dashboard-row-tile-text">
        						Jeder zweite Syrer ist auf der Flucht, etwa die Hälfte der Betroffenen sind Kinder. 
        					</div>
        				</div>

        				<div className="dashboard-row-tile" style={{ backgroundImage : "url(./img/kategorien/das_ambulatorium_fuer_folter_und_kriegsopfer.jpg)"}}>
        					<div className="dashboard-row-tag">STORY</div>
        					<div className="dashboard-row-tile-text">
        						Jeder zweite Syrer ist auf der Flucht, etwa die Hälfte der Betroffenen sind Kinder. 
        					</div>
        				</div>

        				<div className="dashboard-row-tile" style={{ backgroundImage : "url(./img/kategorien/das_ambulatorium_fuer_folter_und_kriegsopfer.jpg)"}}>
        					<div className="dashboard-row-tag">STORY</div>
        					<div className="dashboard-row-tile-text">
        						Jeder zweite Syrer ist auf der Flucht, etwa die Hälfte der Betroffenen sind Kinder. 
        					</div>
        				</div>

        			</div>
        		</div>
        	</div>
        );
    }
}