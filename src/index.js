require("./icons/person.svg");
require("./icons/view_module.svg");

require("./css/reset.css");
require("./css/style.css");

import AppContainer from "./components/container/AppContainer";
import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => (
  <Router>
    <AppContainer />
  </Router>
);

const wrapper = document.querySelector("#app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
