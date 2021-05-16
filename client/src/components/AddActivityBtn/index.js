import React from 'react';
import "./AddActivityBtn.css";


export default function AddActivityBtn(props) {
   
        return (
            <button className="add-activity" onClick={props.handleRouteAddActivity}>Add Activity</button>
  
        )
    
}
