import React, { useState, useEffect } from 'react';
import Login from './Login';
import "./Homepage.css"
import Type from './Type';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const [loading, setLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [booksType, setBooksType] = useState([]);
  const [error, setError] = useState("");

  const API_KEY = "AIzaSyDBN0k-cEvlnsLQj0YELqLD1ckFYMmPF4I";

  const openLoginModal = () => {
    setShowLogin(true);
  };

  const closeLoginModal = () => {
    setShowLogin(false);
  };



  return (
    <div>
      <div className="Header" >
        <h1 >Stay curious.</h1>
        
        <div>
          <div>
            <Link to="/bookSearch">
            <button className="custom-button">Start reading</button>
            </Link>
          </div>
        
        {showLogin && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeLoginModal}>&times;</span>
              <Login />
            </div>
          </div>
        )}
      </div>
      </div>

      
      <div>
      <Type data1={booksType}/>
      </div>
    </div>
  );
};

export default Homepage;
