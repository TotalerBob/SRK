require("./css/reset.css");
require("./css/style.css");

import AppContainer from './components/container/AppContainer';
import ReactDOM from "react-dom";
import React from "react";

const wrapper = document.querySelector("#app");
wrapper ? ReactDOM.render(<AppContainer />, wrapper) : false;