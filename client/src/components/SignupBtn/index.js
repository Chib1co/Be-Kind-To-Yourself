import React from 'react';
import "./SignupBtn.css";


export default function SignupBtn(props) {
   
        return (
                <button className="signupbtn" onClick={props.handleRouteSignup}>Sign up</button>
                
        )
    
}