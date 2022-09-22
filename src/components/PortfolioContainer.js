import React, { useState } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import Portfolio from './pages/Portfolio'
import About from './pages/About';
import Contact from './pages/Contact';


function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='container mx-auto mt-12'>
      <div className='flex flex-col lg:flex-row justify-between m-12'>
        <Header />
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      <div className='m-16'>
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

export default PortfolioContainer;
