import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../shared/Header';
import Footer from '../shared/Footer';


const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className='bg-dark text-white bg-opacity-75'>
      {!isLoading && <Header />}
      {isLoading ? (
        <div style={{height: '100vh'}} className="spinner-container d-flex align-items-center justify-content-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
      
      ) : (
        <Outlet />
      )}
      {!isLoading && <Footer />}
    </div>
  );
};

export default Main;
