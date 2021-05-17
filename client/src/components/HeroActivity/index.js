import React from 'react'
import "./HeroActivity.css";

export default function HeroActivity(props){
        return (
                <div className="bg-img" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
               {props.children}
            </div>
        )
    }

