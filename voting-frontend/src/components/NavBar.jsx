// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user-profile">User Profile</Link>
        </li>
        <li>
          <Link to="/ballot">Ballot</Link>
        </li>
        <li>
          <Link to="/display-fields">Display Fields</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
