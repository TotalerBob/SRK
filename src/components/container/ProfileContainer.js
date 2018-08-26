import React, { Component } from "react";
import ProfileImpact from "../display/ProfileImpact";
import ProfileButton from "../display/ProfileButton";
import { ProfileProgress } from "../display/ProfileProgress";
import profileData from "../../data/profile.json";

export class ProfileContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: profileData
    };
  }

  render() {
    return (
      <div className="content">
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
                <ProfileImpact items={item} />
              ))}
            </div>
          </div>
          <ProfileButton />

          <h2>Meine Errungenschaften</h2>
          <div class="badges">
            <div class="badge">
              <img src="src/img/badge_1.svg" alt="" />
              <div class="description">Erste Spende</div>
            </div>
            <div class="badge">
              <img src="src/img/badge_2.svg" alt="" />
              <div class="description">In 5 Ländern gespendet</div>
            </div>
            <div class="badge">
              <img src="src/img/badge_3.svg" alt="" />
              <div class="description">Für 10 Projekte gespendet</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
