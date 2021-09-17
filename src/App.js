import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import GuestInput from "./components/GuestInput";

import "./App.css";

function App() {
  return (
    <Router>
      <header>
        <nav className="navHead">
          <div className="myName">
            <h1>Richard J Oh</h1>
          </div>
          <div className="navigator">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/projects">Projects</Link>
          </div>
        </nav>
      </header>

      <div>
        <GuestInput />
      </div>

      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/home" component={App} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  );
}

export default App;
