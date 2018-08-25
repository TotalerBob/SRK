import React, { Component } from "react";
import { DonationContainer } from "./DonationContainer";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { NavigationContainer } from "./NavigationContainer";
import { DashboardContainer } from "./DashboardContainer";
import { TopBar } from "../display/TopBar";

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
<<<<<<< HEAD
                <Route exact path="/asd" component={DashboardContainer} />
                <Route exact path="/" component={DonationContainer} />
=======
>>>>>>> 0dddcc1d990fe00577dd997f5eed910d40c11e92
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
