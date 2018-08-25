import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Navigationbar from "./components/Navigationbar";
import Container from "./components/Container";

const App = () => (
  <Router>
    <div>
      <Navigationbar />
      <Container />
    </div>
  </Router>
);

render(<App />, document.getElementById("root"));