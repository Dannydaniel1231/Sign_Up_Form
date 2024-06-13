import React from "react";
import "./Loginsignup.css";
import login from "../Assets/login.jpg";
import password_icon from "../Assets/password.png";
import email_icon from "../Assets/email_icon.jpg";

const LoginSignup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={login} alt="" />
          <input type="text" />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" />
        </div>
      </div>
      <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
      <div className="submit-container">
        <div className="submit"> Sign up</div>
        <div className="submit"> Login</div>
      </div>
    </div>
  );
};

export default LoginSignup;
