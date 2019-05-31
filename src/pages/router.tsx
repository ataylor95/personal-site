import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './home/home';
import Projects from './projects/projects';
import Contact from './contact/contact';

const BasicRouter: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default BasicRouter;
