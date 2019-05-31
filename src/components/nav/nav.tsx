import React from 'react';
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
    return (
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
    </div>
    );
}

export default Nav;