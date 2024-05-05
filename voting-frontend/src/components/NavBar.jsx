import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      {/* Logo and title on the left */}
      <div className="flex items-center space-x-3">
        <Link to="/">
          <img src="https://static.vecteezy.com/system/resources/previews/020/814/239/original/blockchain-icon-for-your-website-design-logo-app-ui-free-vector.jpg" alt="Logo" style={{ height: '40px' }} />
        </Link>
        <span className="text-lg font-semibold">Blockchain Based Voting System</span>
      </div>
      {/* Navigation links on the right */}
      <ul className="flex space-x-4">
        <li className="hover-effect">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="hover-effect">
          <Link to="/user-profile" className="nav-link">User Profile</Link>
        </li>
        <li className="hover-effect">
          <Link to="/ballot" className="nav-link">Ballot</Link>
        </li>
        <li className="hover-effect">
          <Link to="/display-fields" className="nav-link">Display Fields</Link>
        </li>
      </ul>

      {/* Additional styles */}
      <style jsx>{`
        .nav-link {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: inline-block;
          padding: 8px 16px;
          border-radius: 8px;
        }
        .hover-effect:hover .nav-link {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
