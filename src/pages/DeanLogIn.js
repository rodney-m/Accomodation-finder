import React, { useState, useContext } from "react";
import "./DeanLogIn.css";
import LogInModal from "../components/LogInModal";
import {useHistory} from "react-router-dom"
import { AdminLoginContext } from "../Helper/Context";

function Login() {
  const {isAdmin, setIsAdmin} = useContext(AdminLoginContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

    let history = useHistory();

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
        setIsAdmin(true);
        history.push("/dashboard");
    }
  };
  return (
    <div className="Login">
      <div className="loginFormContainer">
        <h2>Dean's Login</h2>
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
