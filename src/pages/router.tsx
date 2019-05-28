import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './home/home';
import Projects from './projects/projects';
import Contact from './contact/contact';

function BasicRouter() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default BasicRouter;
