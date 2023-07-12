import React from "react";
import "./Signin.css";
import { useNavigate } from 'react-router-dom'


const Signin = () => {
  const navigate = useNavigate();
  const handleSignupClick = () => {
    navigate('/signup');
  };
  const handleCloseClick = () => {
    navigate('/');
  };
  return (
    <div className="container">
      <div className="background" />
      <div className="middle-container">
        <div className="head">
          <span className="login">Login</span>
          <button className="close-btn" type="button" onClick={handleCloseClick}>
            X
          </button>
        </div>
        <div className="inputs">
          <input className="e-in" type="text" placeholder="Email"></input>
          <br />
          <input
            className="p-in"
            type="password"
            placeholder="Password"
          ></input>
          <br />
          <button className="in-btn" type="submit">
            Login
          </button>
        </div>
        <div className="line">
            <div className="white-line" />
            
        </div>
        <div className="google-btn">
          <button>Continue with Google</button>
        </div>
        <div className="line">
            <div className="white-line" />
        </div>
        <div className="footer">
          <span>New to Zippy? </span>
          <a onClick={handleSignupClick} >Create Accout</a>
        </div>
      </div>
    </div>
  );
};

export default Signin;
