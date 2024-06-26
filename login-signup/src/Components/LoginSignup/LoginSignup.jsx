import React, { useState } from "react";
import "./Loginsignup.css";
import login from "../Assets/login.jpg";
import password_icon from "../Assets/password.png";
import email_icon from "../Assets/email_icon.jpg";

const LoginSignup = () => {

  const [action, setAction] = useState("Login");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={login} alt="" />
          <input type="text" placeholder="Name"/>
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email Id"/>
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password"  placeholder="Password"/>
        </div>
      </div>
      {action === "Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
      
      <div className="submit-container">
        <div className={action === "Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}> Sign Up </div>
        <div className={action === "Sign Up"?"submit gray":"submit"}  onClick={()=>{setAction("Sign Up")}}>Login</div>
      </div>
    </div>
  );
};

export default LoginSignup;
