/* Icons */
require("./icons/person.svg");
require("./icons/view_module.svg");

/*require("./img/kategorien/das_ambulatorium_fuer_folter_und_kriegsopfer.jpg");
require("./img/kategorien/entlastung_im_alter.jpg");
require("./img/kategorien/fluechtlinge_in_asien_brauchen_hilfe.jpg");
require("./img/kategorien/hilfe_fuer_familien_in_der_schweiz.jpg");
require("./img/kategorien/hilfe_fuer_menschen_auf_der_flucht.jpg");
require("./img/kategorien/hunger_in_afrika.jpg");*/

/* Styles */
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
