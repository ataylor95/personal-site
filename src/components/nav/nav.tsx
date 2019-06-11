import React from 'react';
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
    return (
    <nav>
        <ul>
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
    </nav>
    );
}

export default Nav;