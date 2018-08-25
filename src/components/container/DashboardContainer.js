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
        			<div className="row-title font-bold">Aktuelle Stories und Projekte</div>
        			<div className="row-wrapper">
	        			<div className="row-scroller" style={{ width : '1000px' }}>
	        				
	        				<div className="tile-lg" style={{ backgroundImage : "url(./src/img/kategorien/opfer_vergessener_katastrophen.jpg)"}}>
	        					<div className="tile-tag-live">
	        						<div className="dot"></div>
	        						LIVE
	        					</div>
	        					<div className="tile-text font-light">
	        						Jeder zweite Syrer ist auf der Flucht, etwa die Hälfte der Betroffenen sind Kinder. 
	        					</div>
	        				</div>

	        				<div className="tile-lg" style={{ backgroundImage : "url(./src/img/kategorien/das_ambulatorium_fuer_folter_und_kriegsopfer.jpg)"}}>
	        					<div className="tile-tag">STORY</div>
	        					<div className="tile-text font-light">
	        						Jeder zweite Syrer ist auf der Flucht, etwa die Hälfte der Betroffenen sind Kinder. 
	        					</div>
	        				</div>

	        				<div className="tile-lg" style={{ backgroundImage : "url(./src/img/kategorien/fluechtlinge_in_asien_brauchen_hilfe.jpg)"}}>
	        					<div className="tile-tag">STORY</div>
	        					<div className="tile-text font-light">
	        						Jeder zweite Syrer ist auf der Flucht, etwa die Hälfte der Betroffenen sind Kinder. 
	        					</div>
	        				</div>

	        				<br style={{clear:'left'}} />
	        			</div>
	        		</div>
        		</div>

        		<div className="row">
        			<div className="row-title font-bold">Dafür setzt sich das SRK ein</div>
        			<div className="row-wrapper">
	        			<div className="row-scroller" style={{ width : '1000px' }}> 
	        				
	        				<div className="tile" style={{ backgroundImage : "url(./src/img/kategorien/fluechtlinge_in_asien_brauchen_hilfe.jpg)"}}>
	        					<div className="tile-text font-light">
		        					Flüchtlinge in Asien brauchen Hilfe.
		        				</div>
	        				</div>

	        				<div className="tile" style={{ backgroundImage : "url(./src/img/kategorien/hilfe_fuer_familien_in_der_schweiz.jpg)"}}>
	        					<div className="tile-text font-light">
	        						Hilfe für Familien in der Schweiz.
	        					</div>
	        				</div>

	        				<div className="tile" style={{ backgroundImage : "url(./src/img/kategorien/hunger_in_afrika.jpg)"}}>
	        					<div className="tile-text font-light">
	        						Afrika hat Hunger.
	        					</div>
	        				</div>

	        				<div className="tile" style={{ backgroundImage : "url(./src/img/kategorien/licht_in_das_leben_der_aermsten_bringen.jpg)"}}>
	        					<div className="tile-text font-light">
	        						Licht in das Leben der Ärmsten bringen.
	        					</div>
	        				</div>

	        				<br style={{clear:'left'}} />
	        			</div>
	        		</div>
        		</div>

        		<div className="row">
        			<div className="row-title font-bold">Meine Favoriten</div>
        			<div className="row-wrapper">
	        			<div className="row-scroller" style={{ width : '1000px' }}> 
	        				
	        				<div className="tile" style={{ backgroundImage : "url(./src/img/kategorien/fluechtlinge_in_asien_brauchen_hilfe.jpg)"}}>
	        					<div className="tile-heart"></div>
	        					<div className="tile-text font-light">
		        					Flüchtlinge in Asien brauchen Hilfe.
		        				</div>
	        				</div>

	        				<div className="tile" style={{ backgroundImage : "url(./src/img/kategorien/hilfe_fuer_familien_in_der_schweiz.jpg)"}}>
	        					<div className="tile-heart"></div>
	        					<div className="tile-text font-light">
	        						Hilfe für Familien in der Schweiz.
	        					</div>
	        				</div>

	        				<div className="tile" style={{ backgroundImage : "url(./src/img/kategorien/hunger_in_afrika.jpg)"}}>
	        					<div className="tile-heart"></div>
	        					<div className="tile-text font-light">
	        						Afrika hat Hunger.
	        					</div>
	        				</div>

	        				<div className="tile" style={{ backgroundImage : "url(./src/img/kategorien/licht_in_das_leben_der_aermsten_bringen.jpg)"}}>
	        					<div className="tile-text font-light">
	        						Licht in das Leben der Ärmsten bringen.
	        					</div>
	        				</div>

	        				<br style={{clear:'left'}} />
	        			</div>
	        		</div>
        		</div>

        	</div>
        );
    }
}