import React, { Component } from "react";
import ProfileImpact from "../display/ProfileImpact";
import ProfileButton from "../display/ProfileButton";
import {ProfileProgress} from "../display/ProfileProgress";
import profileData from '../../data/profile.json';

export class ProfileContainer extends Component {

    constructor(){
        super();
        this.state = {
          data: profileData,
          page: "profile"
        }
        console.log(this.state);
        this.handler = this.handler.bind(this)
    }

    handler(e) {
      e.preventDefault()
      this.setState({
        page: "profile2"
      })
    }
    

    render(){
      // VIEW: Profile Page (Some Projects, Achievements)
      if(this.state.page === "profile") {
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
                  <ProfileButton handler = {this.handler} />
                </div>

          </div>
        );
      }

      // VIEW: Donation Tracking (Status bars...)
      else if(this.state.page === "profile2") {
        return (
        <div className="content">

                <div className="profile-header">
                  <div className="profile-picture">
                    <img src="src/img/bobby_avatar.png" alt="Bobby Avatar"/>
                  </div>
                  <div className="profile-name">{this.state.data.user}</div>
                </div>

              {this.state.data.donations.map(item => (
                <ProfileProgress data={item} />
              ))}

        </div>
      )
      }

    }
}
