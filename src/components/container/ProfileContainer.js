import React, { Component } from "react";
import ProfileImpact from "../display/ProfileImpact";
import ProfileButton from "../display/ProfileButton";
import {ProfileProgress} from "../display/ProfileProgress";
import profileData from '../../data/profile.json';

export class ProfileContainer extends Component {

    constructor(){
        super();
        this.state = {
          data: profileData
        }
    }
    

    render(){

        return (
          <div className="content">
            <div className="ttt-temp">

                <div className="profile-header">
                  <div className="profile-picture">
                    <img src="src/img/bobby_avatar.png" alt="Bobby Avatar"/>
                  </div>
                  <div className="profile-name">{this.state.data.user}</div>
                </div>

                <div className="indent-container">
                  <h2>Letzte gespendete Projekte</h2>
                  <div className="profile-scrollmenu">
                    <div className="profile-inner-scroll">
                      {this.state.data.influence.map(item => (
                        <ProfileImpact items={item} />
                      ))}
                    </div>
                  </div>
                  <ProfileButton />
                </div>

            </div>
          </div>
        );
      }
}
