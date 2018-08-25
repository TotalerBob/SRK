import React, { Component } from "react";
import { DonationContainer } from "./DonationContainer";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { NavigationContainer } from "./NavigationContainer";
import { TopBar } from "../display/TopBar";

export default class AppContainer extends Component {
  constructor() {
    super();
  }

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
                <Route path="/donate" component={DonationContainer} />
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
