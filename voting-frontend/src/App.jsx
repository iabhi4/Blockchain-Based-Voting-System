// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Chairperson from './components/Chairperson';
import UserProfile from './components/UserProfile';
import Ballot from './components/Ballot';
import DisplayFields from './components/DisplayFields';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Router>
       <NavBar />
      <div className="container mx-auto px-4">
      <Routes>
          <Route path="/" element={<Chairperson />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/ballot" element={<Ballot />} />
          <Route path="/display-fields" element={<DisplayFields />} />
       </Routes>
      </div>
    </Router>
  );
};

export default App;
