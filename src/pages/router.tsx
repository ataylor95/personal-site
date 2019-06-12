import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './home/home';
import Blog from './blog/blog';

const BasicRouter: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/blog" component={Blog} />
    </Router>
  );
}

export default BasicRouter;
