import React from 'react';
import "./LoginBtn.css";


export default function LoginBtn(props) {
   
        return (
            <button className="logbtn" onClick={props.handleRouteLogin}>Login</button>
  
        )
    
}
