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
             <div className="content-container">

                 <div className="profile-header">
                   <div className="profile-picture"></div>
                   <div className="profile-name">{this.state.data.user}</div>
                 </div>

                 <div className="profile-scrollmenu">

                   {this.state.data.influence.map(item => (
                     <ProfileImpact items={item} />
                   ))}

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
}