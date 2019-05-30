import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Nav as Nav } from '../components/nav/nav';
import Home from './home/home';
import Projects from './projects/projects';
import Contact from './contact/contact';

function BasicRouter() {
  return (
    <Router>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default BasicRouter;
