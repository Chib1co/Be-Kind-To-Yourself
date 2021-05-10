
import {useState, useEffect } from "react";
import "./LoginCard.css"


export default function LoginCard() {
 
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

// useEffect(() => {
    
// }, [input])

return(

<div className="card shadow login-card">
    <h2 className="sign-log-in">Login Form</h2>
    <form className="login">
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="email-input" placeholder="Email" />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="password-input" placeholder="Password" />
        </div>
        <button type="submit" className="form-btn btn btn-default logbtn">Login</button>
    </form>
    <br />
    <p className="login-btn-links">Or sign up <a href="/signup">here</a></p>
    <p className="login-btn-links"><a href="/">Go back to Home</a></p>
</div>

)
}