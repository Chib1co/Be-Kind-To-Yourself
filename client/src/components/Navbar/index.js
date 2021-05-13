import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/js/src/collapse.js";

export default function Navbar() {
    return (
        <nav className = "navbar navbar-expand-lg navbar-light">
            <div className="navbar-text">Be-Kind-To-Yourself</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav" id="menu">
                    <li className="nav-item">
                        <Link to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "Home"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Home
                       </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/checker"
                            className={
                                window.location.pathname === "/Checker"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Emotion Checker
                       </Link>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link active" href="contact.html">Contact<span class="sr-only">(current)</span></a> */}
                        <Link to="/charts"
                            className={
                                window.location.pathname === "/Charts"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Your daily tracking
                       </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup"
                            className={
                                window.location.pathname === "/Signup"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Sign up
                       </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Login"
                            className={
                                window.location.pathname === "/Login"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Login
                       </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
