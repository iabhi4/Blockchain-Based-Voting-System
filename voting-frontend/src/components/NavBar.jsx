import React from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      {/* Logo and title on the left */}
      <div className="flex items-center space-x-3">
        <NavLink to="/" exact>
          <img src="https://static.vecteezy.com/system/resources/previews/020/814/239/original/blockchain-icon-for-your-website-design-logo-app-ui-free-vector.jpg" alt="Logo" style={{ height: '40px' }} />
        </NavLink>
        <span className="text-lg font-semibold">Blockchain Based Voting System</span>
      </div>
      {/* Navigation links on the right */}
      <ul className="flex space-x-4">
        <li className="hover-effect">
          <NavLink to="/" exact className="nav-link" activeClassName="active-link">Home</NavLink>
        </li>
        <li className="hover-effect">
          <NavLink to="/user-profile" className="nav-link" activeClassName="active-link">User Profile</NavLink>
        </li>
        <li className="hover-effect">
          <NavLink to="/ballot" className="nav-link" activeClassName="active-link">Ballot</NavLink>
        </li>
        <li className="hover-effect">
          <NavLink to="/display-fields" className="nav-link" activeClassName="active-link">Display Fields</NavLink>
        </li>
      </ul>

      {/* Additional styles */}
      <style jsx>{`
        .nav-link {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: inline-block;
          padding: 8px 16px;
          border-radius: 8px;
          background-color: transparent;  // Ensures background is transparent by default
        }
        .hover-effect:hover .nav-link {
          transform: translateY(-5px) scale(1.05);  // Applies the 3D effect on hover
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.3);  // Adds a deeper shadow for 3D effect
          background-color: red;  // Changes background color to red on hover
          color: white;  // Ensures text color is white for better readability
        }
        .active-link {
          font-weight: bold;  // Makes the active link bold
          color: yellow;  // Changes the text color of the active link to yellow
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
