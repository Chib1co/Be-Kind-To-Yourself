
import {useState, useEffect } from "react";
import "./LoginCard.css"

// async function loginUser(credentials) {
//     return fetch('http://localhost:3000/Login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(credentials)
//     })
//       .then(data => data.json())
//    }

export default function LoginCard(props) {
 
return(

<div className="card shadow login-card">
    <h2 className="sign-log-in">Login Form</h2>
    <form className="login" onSubmit={props.handleSubmit}>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" onChange={e => {props.setEmail(e.target.value)}} className="form-control" id="email-input" placeholder="Email" />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" onChange={e => {props.setPassword(e.target.value)}} className="form-control" id="password-input" placeholder="Password" />
        </div>
        <button type="submit"  className="form-btn btn btn-default logbtn">Login</button>
    </form>
    <br />
    <p className="login-btn-links">Or sign up <a href="/signup">here</a></p>
    <p className="login-btn-links"><a href="/">Go back to Home</a></p>
</div>

)
}