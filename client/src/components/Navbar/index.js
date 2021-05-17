import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/js/src/collapse.js";
import {Auth} from "../../utils/Auth"
import { useHistory, useLocation } from "react-router-dom";
import API from "../../utils/API"

export default function Navbar() {
    const history = useHistory();
    const location = useLocation();
    
    const [isAuthenticated, setisAuthenticated] = useState(false);
    const value = {isAuthenticated, setisAuthenticated};

    useEffect(( ) => {

        // call isAuthenticated data api to check if isAuthenticated is logged in
        API.userLoggedIn()
            .then(result => {
                setisAuthenticated(result.data.isAuthenticated);
            })
            .catch(err => console.log(err));

    }, []);

    const [links, setLinks] = useState([
        {
            title: 'Home',
            to: '/',
            show: isAuthenticated,
        },
        {
            title: 'Home',
            to: '/',
            show: !isAuthenticated,
        },
        {
            title: 'Checker',
            to: '/checker',
            show: isAuthenticated, //login only
        },
        {
            title: 'Day Result',
            to: '/result',
            show: isAuthenticated, //login only
        },
        {
            title: 'Daily chart',
            to: '/Charts',
            show: isAuthenticated,//login only
        },
        {
            title: 'Add Activity',
            to: '/addactivity',
            show: isAuthenticated,//login only
        },
        {
            title: '7 days results',
            to: '/sevendayresults',
            show: isAuthenticated,//login only
        },
        {
            title: 'Login',
            to: '/login',
            show: !isAuthenticated, //public only
        },
        {
            title: 'Sign up',
            to: '/signup',
            show: !isAuthenticated, //public only
        },
        {
            title: 'Logout',
            onClick: logOut,
            to: '/',
            show: isAuthenticated, //login only function only
        },
    ])

    function logOut() {
        
        API.userLogout();
        history.go(0); // refreshes the page, but we could push them back to login page
      }

      
    return (
        <nav className = "navbar navbar-expand-lg navbar-light">
            <div className="navbar-text">Be-Kind-To-Yourself</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav" id="menu">
                        {links.map(link => {
                            // console.log('show ' + link.title + ' ' + link.show);
                            // console.log('logged in ', isAuthenticated);

                            if(link.show === !isAuthenticated){
                            return ( 
                            <li className="nav-item">
                                <Link
                                    onClick={link.onClick ? link.onClick : () => {}}
                                    to={link.to}
                                    className={location.pathname === link.to ? 'nav-link active' : 'nav-link'}
                                >{link.title}</Link>
                            </li>
                            )
                            }
                    })
                }
                    </ul>
                   
            </div>
        </nav>
    );
}
