import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

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
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/projects">Projects</Link>
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
