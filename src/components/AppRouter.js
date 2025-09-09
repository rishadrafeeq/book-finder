import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import CookiePolicy from './CookiePolicy';
import Footer from './Footer';

const AppRouter = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About onNavigate={handleNavigation} />;
      case 'contact':
        return <Contact onNavigate={handleNavigation} />;
      case 'privacy':
        return <PrivacyPolicy onNavigate={handleNavigation} />;
      case 'terms':
        return <TermsOfService onNavigate={handleNavigation} />;
      case 'cookies':
        return <CookiePolicy onNavigate={handleNavigation} />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Navbar onNavigate={handleNavigation} currentPage={currentPage} />
      {renderPage()}
      <Footer onNavigate={handleNavigation} />
    </>
  );
};

export default AppRouter;
