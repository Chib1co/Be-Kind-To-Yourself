
import React, {useState, useEffect } from "react";
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
 console.log(props.value)
return(

<div className="card shadow login-card" id="login-card">
    <h2 className="sign-log-in">Login Form</h2>
    <form className="login">
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email"
            name="email"
             onChange={props.handleInputChange} 
             value={props.formState.email}
             className="form-control" 
             id="email-input" 
             placeholder="Email" />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" 
            name="password"
            onChange={props.handleInputChange} 
            value={props.formState.password} 
            className="form-control" 
            id="password-input" 
            placeholder="Password" />
        </div>
        <button type="submit" disabled={!(props.formState.email && props.formState.password)} onClick={props.handleFormSubmit} className="form-btn btn btn-default logbtn">Login</button>
        { props.hasErrorState ? <strong>Invalid details, try again</strong> : '' }
    </form>
    <br />
    <p className="login-btn-links">Or sign up <a href="/signup">here</a></p>
    <p className="login-btn-links"><a href="/">Go back to Home</a></p>
</div>

)
}