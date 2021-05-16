import {useState, useEffect } from "react";
import "./SignupCard.css"


export default function SignupCard(props) {
 
return(

    <div className="card shadow signup-card" id="signup-card">
    <h2 className="sign-log-in">Signup Form</h2>
    <form className="signup">
    <div className="form-group">
            <label htmlFor="exampleInputFirstname1">First name</label>
            <input type="firstname" 
            name="firstname"
            onChange={props.handleInputChange} 
            value={props.formState.firstname} 
            className="form-control" 
            id="firstname-input" 
            placeholder="Firstname" />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputLastname1">Last name</label>
            <input type="lastname" 
            name="lastname"
            onChange={props.handleInputChange} 
            value={props.formState.lastname} 
            className="form-control" 
            id="lastname-input" 
            placeholder="Lastname" />
        </div>
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
        <button type="submit" disabled={!(props.formState.email && props.formState.password)}
                onClick={props.handleFormSubmit} className="form-btn btn btn-default logbtn" id="signup-submit">Sign up</button>
    </form>

    <br />
    <p className="login-btn-links">Or login <a className="link" href="/Login">here</a></p>
    <p className="login-btn-links"><a className="link" href="/">Go back to Home</a></p>
</div>
)
}