import React, { Component } from "react";
import { DonationContainer } from "./DonationContainer";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { NavigationContainer } from "./NavigationContainer";
import { DashboardContainer } from "./DashboardContainer";
import { TopBar } from "../display/TopBar";
import { ProfileContainer } from "./ProfileContainer";
import { CategoryContainer } from "./CategoryContainer";
import { StoryContainer } from "./StoryContainer";
import { ProjectContainer } from "./ProjectContainer";

export default class AppContainer extends Component {
  constructor() {
    super();
  }
  /* Test */
  render() {
    return (
      <div className="container">
        <div className="content-container">
          <TransitionGroup className="transition-group">
            <CSSTransition
              key={location.key}
              timeout={{ enter: 300, exit: 300 }}
              classNames="fade"
            >
              <Switch location={location}>
                <Route exact path="/" component={DashboardContainer} />
                <Route exact path="/donate" component={DonationContainer} />
                <Route exact path="/profile" component={ProfileContainer} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
        <TopBar />
        <NavigationContainer />
      </div>
    );
  }
}
