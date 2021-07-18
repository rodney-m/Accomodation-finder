import React, { useState, useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";
import {LoginContext} from "../Helper/Context"

function Login() {

  const {loggedIn, setLoggedIn} = useContext(LoginContext);

  const [toggle, setToggle] = useState(true);
  let history = useHistory();

  const toggler = (e) => {
    e.preventDefault();
    setToggle((prev) => !prev);
  };

  // on Login
  const onLogin = () => {
    setLoggedIn(true);
    history.push("/apply");
  };

  return (
    <div className="Login">
      <div className="main-form-container">
        <div className="form-headings">
          <div onClick={toggler} className="login-heading">
            <p>Login</p>
          </div>
          <div onClick={toggler} className="register-heading">
            <p>Register</p>
          </div>
          <div
            className={`bottom_border ${!toggle ? "toggle_bottom_border" : ""}`}
          ></div>
        </div>
        <div
          className={`form-container login-container ${
            !toggle ? "active" : ""
          }`}
        >
          {/* Login form start */}
          <form action="">
            <div className="input-container">
              <input type="text" placeholder="Registration No." />
              <input type="password" placeholder="Password" />

              <button onClick={onLogin}>LOGIN</button>

              <a href="#" className="forgot-pass">
                Forgot your password?
              </a>
            </div>
          </form>
        </div>

        <div
          className={`form-container register-container ${
            toggle ? "active" : ""
          }`}
        >
          {/* SignUp form start */}
          <form action="">
            <div className="input-container">
              <input type="text" placeholder="Registration No." />
              <input type="password" placeholder="Create A Password" />
              <input type="password" placeholder="Confirm Password" />
              <button>REGISTER</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
