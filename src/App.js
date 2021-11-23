import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";

import "./App.css";
import Intro from "./components/Intro";
import Clips from "./components/Clips";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <header>
        <nav className="navHead">
          <div>
            <h1>Richard J Oh</h1>
          </div>
          <div className="navigator">
            <NavLink
              to="/home"
              className="links"
              exact
              activeStyle={{ color: "red" }}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="links"
              exact
              activeStyle={{ color: "red" }}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="links"
              exact
              activeStyle={{ color: "red" }}
            >
              Contact
            </NavLink>
            <NavLink
              to="/projects"
              className="links"
              exact
              activeStyle={{ color: "red" }}
            >
              Projects
            </NavLink>
          </div>
        </nav>
      </header>

      <div>
        <Intro />
      </div>

      <div>
        <Clips />
      </div>

      <div>
        <Footer />
      </div>

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
