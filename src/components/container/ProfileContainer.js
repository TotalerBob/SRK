import React, { Component } from "react";
import ProfileImpact from "../display/ProfileImpact";
import ProfileButton from "../display/ProfileButton";
import { ProfileProgress } from "../display/ProfileProgress";
import profileData from "../../data/profile.json";
import { Link } from 'react-router-dom';

export class ProfileContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: profileData
    };
  }

  render() {
    return (
      <div>
        <div className="profile-header">
          <div className="profile-picture">
            <img src="src/img/bobby_avatar.png" alt="Bobby Avatar" />
          </div>
          <div className="profile-name">{this.state.data.user}</div>
        </div>

        <div className="indent-container">
          <h2>Letzte gespendete Projekte</h2>
          <div className="profile-scrollmenu">
            <div className="profile-inner-scroll">
              {this.state.data.influence.map(item => (
                <Link to="/project"><ProfileImpact items={item} /></Link>
              ))}
            </div>
          </div>
          <ProfileButton />

          <div className="silver-line"></div>

          <h2>Meine Errungenschaften</h2>

          <div className="badges">
          <div className="profile-badges">
            <img src="src/img/badges/badges.png" alt=""/>
          </div>
          <div className="silver-line"></div>
          <div className="profile-stats">
            <div className="line"><div className="name">Insgesamt gespendet:</div> <div className="val">CHF 3'520.-</div></div>
            <div className="line"><div className="name">Anzahl Projekte gespendet: </div> <div className="val">14</div> </div>
          </div>
        </div>
      </div></div>
    );
  }
}
