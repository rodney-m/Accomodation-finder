import React, { useState, useContext } from "react";
import "./LoginHouseOwner.css";
import LogInModal from "../components/LogInModal";
import { LandlordLoginContext } from "../Helper/Context";
import {useHistory} from "react-router-dom"

function Login() {
  const { isLandlordLoggedIn, setIsLandlordLoggedIn } = useContext(LandlordLoginContext);
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const onLogin = (e) => {
    e.preventDefault();
    if (email === "" && password === "") {
        setMessage("Email and Password fields cannot be empty");
      setShowModal(true);
    } else if (email === "") {
        setMessage("Email field cannot be empty");
      setShowModal(true);
    } else if (password === "") {
        setMessage("Password field cannot be empty");
      setShowModal(true);
    } else {
      setIsLandlordLoggedIn(true);
      history.push("/landlords/dashboard")
    }
  };
  return (
    <div className="Login">
      <div className="loginFormContainer">
        <h2>Landlords Login</h2>
        <form method="/Post">
          <div className="formInput">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="formInput">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={onLogin} type="submit">
            Submit
          </button>
        </form>
      </div>
      {showModal ? <LogInModal setShowModal={setShowModal} message={message} /> : ""}
    </div>
  );
}

export default Login;
