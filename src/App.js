import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <header>
        <div>
          <Link to="/home">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <Link to="/projects">Projects</Link>
        </div>
      </header>

      <Switch>
        <Route path="/projects" />
        <Route path="/contact" />
        <Route path="/about" />
        <Route path="/home" />
        <Route path="/" />
      </Switch>
    </Router>
  );
}

export default App;
