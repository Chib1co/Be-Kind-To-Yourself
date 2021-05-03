
import {useState, useEffect } from "react";
import "./style.css"
export default function LoginCard() {
    return(
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

useEffect(() => {
    effect
    return () => {
        cleanup
    }
}, [input])


<div className="card shadow login-card">
    <h2 className="sign-log-in">Login Form</h2>
    <form className="login">
        <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="email-input" placeholder="Email" />
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="password-input" placeholder="Password" />
        </div>
        <button type="submit" className="form-btn btn btn-default logbtn">Login</button>
    </form>
    <br />
    <p className="login-btm-links">Or sign up <a href="/signup">here</a></p>
    <p className="login-btm-links"><a href="/">Go back to Home</a></p>
</div>

)
}