import React, {useState} from 'react'
import "./Login.css"
import {Link} from "react-router-dom";

function Login() {
    const [toggle, setToggle] = useState(true);

    const toggler = (e) => {
        e.preventDefault();
        setToggle((prev) => !prev);
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
                <form action="">
                    <div className="input-container">
                    <input type="text" placeholder="Registration No." />
                    <input type="password" placeholder="Password" />
                    <Link to="/apply">
                        <button>LOGIN</button>
                    </Link>
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
    )
}

export default Login
