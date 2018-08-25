import React, { Component } from "react";
import dashboardData from '../../data/dashboardData.json';
import {TileRowLarge} from "./TileRowLarge";
import {TileRow} from "./TileRow";

export class DashboardContainer extends Component {
    constructor(){
        super();
        this.state = {
        	"projectsAndStories": dashboardData.projectsAndStories,
        	"projectsAndCategories": dashboardData.projectsAndCategories,
        	"myFavorites" : dashboardData.myFavorites
        }
    }



    render(){
        return (
        	<div className="dashboard-wrapper">

        		<TileRowLarge
        			title="Aktuelle Projekte und Stories"
        			size="950"
        			form="large"
        			json={this.state.projectsAndStories}
        		/>

        		<TileRow
        			title="Dafür setzt sich das SRK ein"
        			size="900"
        			json={this.state.projectsAndCategories}
        		/>

        		<TileRow
        			title="Meine Favoriten"
        			size="900"
        			json={this.state.myFavorites}
        		/>

        	</div>
        );
    }
}