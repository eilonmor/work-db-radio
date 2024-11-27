// src/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/point">Points</Link>
        </li>
        <li>
          <Link to="/point20">Points 20</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
