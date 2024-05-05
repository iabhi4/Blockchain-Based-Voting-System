import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chairperson from './components/Chairperson';
import UserProfile from './components/UserProfile';
import Ballot from './components/Ballot';
import DisplayFields from './components/DisplayFields';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div style={{
          backgroundImage: 'url("https://png.pngtree.com/thumb_back/fw800/background/20230617/pngtree-rendering-of-a-hand-placing-a-paper-into-a-vote-box-image_3637850.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh', // Ensures the background covers the full viewport height
        }}>
        <NavBar />
        <div className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Chairperson />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/ballot" element={<Ballot />} />
            <Route path="/display-fields" element={<DisplayFields />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
