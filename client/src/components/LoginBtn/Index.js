import React from 'react';
// import "./LoginBtn.css";


export default function LoginBtn(props) {
   
        return (
            <button
    onClick={props.onClick}
    className={`card-btn ${props["data-value"]}`}
    {...props}></button>
  
        )
    
}
