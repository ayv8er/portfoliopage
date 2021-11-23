import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./App.css";
import Intro from "./components/Intro";
import Clips from "./components/Clips";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/projects" component={Clips} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={Intro} />
        <Route path="/">
          <Redirect to="/about" />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
