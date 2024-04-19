import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation/Navigation';
import AboutPage from './components/AboutPage/Aboutpage';
import Playfields from './components/Playfields/Playfields';
import Gallery from './components/Gallery/Gallery';
import NewsUpdates from './components/NewsUpdates/NewsUpdates';
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents';
import DepartmentInfo from './components/DepartmentInfo';
import Staff from './components/Staff';
import Achievements from './components/Achievements';
import Gymnasium from './components/Gymnasium';
import Slideshow from './components/Slideshow';
import Notifications from './components/Notifications/Notifications'; 
import Footer from './components/Footer'; // Import the Footer component
import sportsimg1 from './images/sportsimg1.jpg';
import sportsimg3 from './images/sportsimg3.jpg';
import sportimg4 from './images/sportimg4.jpg';

import './App.css';

const SlideshowComponent = ({ images }) => {
  return (
    <div className="slideshow-container">
      <Slideshow images={images} />
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('slideshow'); // Default to slideshow
  const images =[sportsimg1,sportsimg3,sportimg4];

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <Router>
      <div className="app-container">
        <Header />
        <Navigation handleNavigation={handleNavigation} />
        <div className="content">
          <div className="main-content">
            {currentPage === 'slideshow' && (
              <>
                <div className="slideshow-row">
                  <SlideshowComponent images={images}></SlideshowComponent>
                </div>
                <div className="departmentinfo-row">
                  <DepartmentInfo />
                </div>
              </>
            )}
            {currentPage === 'about' && <AboutPage />}
            {currentPage === 'playfields' && <Playfields />}
            {currentPage === 'gallery' && <Gallery />}
            {currentPage === 'news' && <NewsUpdates />}
            {currentPage === 'events' && <UpcomingEvents />}
            {currentPage === 'staff' && <Staff />}
            {currentPage === 'achievements' && <Achievements />}
            {currentPage === 'gymnasium' && <Gymnasium />}
            {currentPage === 'notifications' && <Notifications />}
          </div>
        </div>
        <Footer /> {/* Include the Footer component */}
      </div>
    </Router>
  );
};

export default App;
