import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

/**
 * Containers.
 */
import { NavigationContainer } from "./NavigationContainer";
import { DashboardContainer } from "./DashboardContainer";
import { TopBar } from "../display/TopBar";
import { ProfileContainer } from "./ProfileContainer";
import { ProfileContainerAll } from "./ProfileContainerAll";
import { CategoryContainer } from "./CategoryContainer";
import { StoryContainer } from "./StoryContainer";
import { ProjectContainer } from "./ProjectContainer";
import { DonationContainer } from "./DonationContainer";



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
                <Route exact path="/profile" component={ProfileContainer} />
                <Route exact path="/category" component={CategoryContainer} />
                <Route exact path="/story" component={StoryContainer} />
                <Route exact path="/project" component={ProjectContainer} />
                <Route exact path="/profileAll" component={ProfileContainerAll} />
                <Route exact path="/donate" component={DonationContainer} />
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
