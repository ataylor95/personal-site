import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Home from './home/home';
import Blog from './blog/blog';

const BasicRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default BasicRouter;
