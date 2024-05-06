import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Chairperson from './components/Chairperson';
import UserProfile from './components/UserProfile';
import Ballot from './components/Ballot';
import DisplayFields from './components/DisplayFields';

const App = () => {
  return (
    <Router>
      <NavBar />
      <RoutesContainer />
      <Footer />
    </Router>
  );
};

const RoutesContainer = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames={{
          enter: 'transform transition duration-300',
          enterFrom: 'translate-x-full',
          enterTo: 'translate-x-0',
          exit: 'transform transition duration-300',
          exitFrom: 'translate-x-0',
          exitTo: '-translate-x-full',
        }}
        timeout={300}
      >
        <div className="relative min-h-screen">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://png.pngtree.com/thumb_back/fw800/background/20230617/pngtree-rendering-of-a-hand-placing-a-paper-into-a-vote-box-image_3637850.jpg")' }}>
            <div className="container mx-auto px-4 py-10">
              <Routes>
                <Route path="/" element={<Chairperson />} />
                <Route path="/user-profile" element={<UserProfile />} />
                <Route path="/ballot" element={<Ballot />} />
                <Route path="/display-fields" element={<DisplayFields />} />
              </Routes>
            </div>
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
