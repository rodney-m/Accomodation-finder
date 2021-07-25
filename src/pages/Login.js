import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import LogInModal from "../components/LogInModal";

import { useHistory } from "react-router-dom";
import { LoginContext } from "../Helper/Context";

import axios from 'axios';

function Login() {
    const { loggedIn, setLoggedIn } = useContext(LoginContext);
    const [toggle, setToggle] = useState(true);
    let history = useHistory();
    const [regNo, setRegNo] = useState("");
    const [password, setPassword] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState("");

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
                reg_number: regNo,
                password: password
            };

            axios
                .post("http://localhost:5000/user/login", newLogin)
                .then((response) => {
                    if (response.status === 200) {
                        setLoggedIn(true);
                        history.push("/apply")
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        };
    };

    return ( <
        div className = "Login" >
        <
        div className = "main-form-container" >
        <
        div className = "form-headings" >
        <
        div onClick = { toggler }
        className = "login-heading" >
        <
        p > Login < /p> < /
        div > <
        div onClick = { toggler }
        className = "register-heading" >
        <
        p > Register < /p> < /
        div > <
        div className = { `bottom_border ${!toggle ? "toggle_bottom_border" : ""}` } >
        <
        /div> < /
        div > <
        div className = { `form-container login-container ${
            !toggle ? "active" : ""
          }` } > { /* Login form start */ } <
        form action = "" >
        <
        div className = "input-container" >
        <
        input type = "text"
        placeholder = "Registration No."
        onChange = {
            (e) => setRegNo(e.target.value)
        }
        /> <
        input type = "password"
        placeholder = "Password"
        onChange = {
            (e) => setPassword(e.target.value)
        }
        />

        <
        button onClick = { onLogin } > LOGIN < /button>

        <
        Link to = "#"
        className = "forgot-pass" >
        Forgot your password ?
        <
        /Link> < /
        div > <
        /form> < /
        div >

        <
        div className = { `form-container register-container ${
            toggle ? "active" : ""
          }` } > { /* SignUp form start */ } <
        form action = "" >
        <
        div className = "input-container" >
        <
        input type = "text"
        placeholder = "Registration No." / >
        <
        input type = "password"
        placeholder = "Create A Password" / >
        <
        input type = "password"
        placeholder = "Confirm Password" / >
        <
        button > REGISTER < /button> < /
        div > <
        /form> < /
        div > <
        /div>

        {
            showModal ?
                <
                LogInModal setShowModal = { setShowModal }
            message = { message }
            />: ""
        }

        <
        /div>
    );
}

export default Login;