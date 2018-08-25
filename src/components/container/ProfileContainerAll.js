import React, { Component } from "react";
import ProfileImpact from "../display/ProfileImpact";
import ProfileButton from "../display/ProfileButton";
import {ProfileProgress} from "../display/ProfileProgress";
import profileData from '../../data/profile.json';

export class ProfileContainerAll extends Component {

    constructor(){
        super();
        this.state = {
          data: profileData
        }
    }
    
    render(){

        return (
        <div className="content">
         <div className="content-container">

              <div className="profile-header">
                <div className="profile-picture"></div>
                <div className="profile-name">{this.state.data.user}</div>
              </div>

              {this.state.data.donations.map(item => (
                <ProfileProgress data={item} />
              ))}

         </div>
        </div>
      )

    }
}
