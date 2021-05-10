import {useState, useEffect } from "react";
import "./SignupCard.css"


export default function SignupCard() {
 
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

// useEffect(() => {
    
// }, [input])

return(

<div className="card shadow signup-card">
    <h2 className="sign-log-in">Signup Form</h2>
    <form className="signup">
    <div className="form-group">
            <label htmlFor="exampleInputFirstname1">first name</label>
            <input type="firstname" className="form-control" id="firstname-input" placeholder="Firstname" />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputLastname1">last name</label>
            <input type="lastname" className="form-control" id="lastname-input" placeholder="Lastname" />
        </div>
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
    <p className="login-btn-links">Or login <a href="/Login">here</a></p>
    <p className="login-btn-links"><a href="/">Go back to Home</a></p>
</div>

)
}