import React from 'react';
import "./StartCheckBtn.css";

export default function StartCheckBtn(props){
    return(
        <button className="start-check-btn" onClick={props.handleRouteStartCheck}>Start Check</button>
    )

}
