import React from 'react';
// import "./StartBtn.css";


export default function StartBtn(props) {
   
        return (
            <button
    onClick={props.onClick}
    className={`card-btn ${props["data-value"]}`}
    {...props}></button>
  
        )
    
}