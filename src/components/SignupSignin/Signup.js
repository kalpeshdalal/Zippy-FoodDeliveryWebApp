import React from "react";
import "./Signup.css";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleCloseClick = () => {
    navigate("/");
  };
  return (
    <div className="container">
      <div className="background" />
      <div className="middle-container">
        <div className="head">
          <span className="login">Signup</span>
          <button className="close-btn" type="button" onClick={handleCloseClick}>
            X
          </button>
        </div>
        <div className="inputs">
          <input className="n-in" type="text" placeholder="Name"></input>
          <br />
          <input className="e-in" type="text" placeholder="Email"></input>
          <br />
          <input
            className="p-in"
            type="password"
            placeholder="Password"
          ></input>
          <br />
          <input
            className="p-in"
            type="password"
            placeholder="Re-Enter Password"
          ></input>
          <br/>


          <button className="in-btn" type="submit">
            Signup
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
          <span>Already have an account? </span>
          <a onClick={handleLoginClick}>Login...</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
