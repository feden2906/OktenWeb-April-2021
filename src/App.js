import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import './App.css';
import { Links } from "./components/Links";
import { Routs } from "./components/Routs";

function App() {
  return (
    <Router>
      <Links />
      <Routs />
    </Router>
  );
}

export default App;
