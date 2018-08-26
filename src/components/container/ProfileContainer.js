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

                  <div class="silver-line"></div>

                  <h2>Meine Errungenschaften</h2>
                  <div class="profile-badges">
                    <img src="src/img/badges/badges.png" alt=""/>
                  </div>

                  <div class="silver-line"></div>
                  
                  <div class="profile-stats">
                    <div class="line"><div class="name">Insgesamt gespendet:</div> <div class="val">CHF 3'520.-</div></div>
                    <div class="line"><div class="name">Anzahl Projekte gespendet: </div> <div class="val">14</div> </div>
                  </div>
                  

                </div>

          </div>
        );
      }
}
