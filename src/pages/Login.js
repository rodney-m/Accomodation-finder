import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import LogInModal from "../components/LogInModal";

import { useHistory } from "react-router-dom";
import { LoginContext } from "../Helper/Context";
import { LoggedInAsContext } from "../Helper/Context";

import axios from "axios";

function Login() {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  const { loggedInAs, setLoggedInAs } = useContext(LoggedInAsContext);
  const [toggle, setToggle] = useState(true);
  let history = useHistory();
  const [regNo, setRegNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("")

  const toggler = (e) => {
    e.preventDefault();
    setToggle((prev) => !prev);
  };

  // on Login
  const onLogin = (e) => {
    e.preventDefault();
    if (regNo === "" && password === "") {
      setMessage("Registration Number and Password fields cannot be empty");
      setShowModal(true);
    } else if (regNo === "") {
      setMessage("Registration Number field cannot be empty");
      setShowModal(true);
    } else if (password === "") {
      setMessage("Password field cannot be empty");
      setShowModal(true);
    } else {
      const newLogin = {
        reg_number: regNo.toUpperCase(),
        password: password,
      };
      axios
        .post("http://localhost:5000/user/login", newLogin)
        .then((response) => {
          if (response.status === 200) {
            setLoggedIn(true);
            history.push("/apply");

            setLoggedInAs(response.data.details);
          } else {
            console.log(response.status);
            setMessage("Registration number and password did not match");
            setShowModal(true);
          }
        })
        .catch((err) => {
          setMessage("Login failed. Please try again!");
          setShowModal(true);
        });
    }
  };

  //On Sign Up
  const onSignUp = (e) => {
    e.preventDefault();
    if (regNo === "" && password === "") {
      setMessage("Registration Number and Password fields cannot be empty");
      setShowModal(true);
    } else if (regNo === "") {
      setMessage("Registration Number field cannot be empty");
      setShowModal(true);
    } else if (password === "") {
      setMessage("Password field cannot be empty");
      setShowModal(true);
    } else if (!(password === confirmPassword)) {
      setMessage("Passwords mismatch!");
      setShowModal(true);
    } else {
      const newSignUp = {
        reg_number: regNo.toUpperCase(),
        password: password,
      };

      axios
        .post("http://localhost:5000/user/signup", newSignUp)
        .then((response) => {
          if (response.status === 200) {
            setMessage("User account successfully created. Login to continue!");
            setShowModal(true);
          } else if (response.status === 404) {
            setMessage(
              "Registration did not match any record. Please make sure you're registered!"
            );
            setShowModal(true);
          }
        })
        .catch((err) => {
          setMessage("Sign up failed. Please try again!");
          setShowModal(true);
        });
    }
  };

  return (
    <div className="Login">
      <div className="main-form-container">
        <div className="form-headings">
          <div onClick={toggler} className="login-heading">
            <p> Login </p>{" "}
          </div>{" "}
          <div onClick={toggler} className="register-heading">
            <p> Register </p>{" "}
          </div>{" "}
          <div
            className={`bottom_border ${!toggle ? "toggle_bottom_border" : ""}`}
          ></div>{" "}
        </div>{" "}
        <div
          className={`form-container login-container ${
            !toggle ? "active" : ""
          }`}
        >
          {" "}
          {/* Login form start */}{" "}
          <form action="">
            <div className="input-container">
              <input
                type="text"
                placeholder="Registration No."
                onChange={(e) => setRegNo(e.target.value)}
              />{" "}
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />{" "}
              <button onClick={onLogin}> LOGIN </button>{" "}
              <Link to="#" className="forgot-pass">
                Forgot your password ?
              </Link>{" "}
            </div>{" "}
          </form>{" "}
        </div>{" "}
        <div
          className={`form-container register-container ${
            toggle ? "active" : ""
          }`}
        >
          {" "}
          {/* SignUp form start */}{" "}
          <form action="">
            <div className="input-container">
              <input
                type="text"
                placeholder="Registration No."
                onChange={(e) => setRegNo(e.target.value)}
              />{" "}
              <input
                type="password"
                placeholder="Create A Password"
                onChange={(e) => setPassword(e.target.value)}
              />{" "}
              <input
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />{" "}
              <button onClick={onSignUp}> REGISTER </button>{" "}
            </div>{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
      {showModal ? (
        <LogInModal setShowModal={setShowModal} message={message} />
      ) : (
        ""
      )}{" "}
    </div>
  );
}

export default Login;
