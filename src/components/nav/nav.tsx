import React from 'react';
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
    return (
    <nav>
        <ul className="nav">
          <li className="nav__item">
            <Link to="/">View Projects</Link>
          </li>
          <li className="nav__item">
            <Link to="/blog">View Blog</Link>
          </li>
        </ul>
    </nav>
    );
}

export default Nav;