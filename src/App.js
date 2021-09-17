import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import GuestInput from "./components/GuestInput";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

import "./App.css";
import Intro from "./components/Intro";
import Clips from "./components/Clips";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <header>
        <nav className="navHead">
<<<<<<< HEAD
          <div>
=======
          <div className="myName">
>>>>>>> 7a29963ad2bf06a3dbf5a8b9391b45d06406b35e
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
<<<<<<< HEAD
        <Intro />
      </div>

      <div>
        <Clips />
      </div>

      <div>
        <Footer />
=======
        <GuestInput />
>>>>>>> 7a29963ad2bf06a3dbf5a8b9391b45d06406b35e
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
