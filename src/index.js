/* Icons */
require("./icons/person.svg");
require("./icons/view_module.svg");

/* Styles */
require("./css/reset.css");
require("./css/style.css");

import AppContainer from "./components/container/AppContainer";
import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

const App = withRouter(({ location }) => {
  return <AppContainer loc={{ location }} />;
});

const wrapper = document.querySelector("#app");
wrapper
  ? ReactDOM.render(
      <Router>
        <App />
      </Router>,
      wrapper
    )
  : false;
