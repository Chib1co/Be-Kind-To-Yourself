import React from 'react'
import "./HeroHome.css";

export default function HeroHome(props){
        return (
                <div className="header-img" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
                <div className="offset-1 col-9 " id="home"></div>
                <h3 className="title">5 Steps for Daily Emotions Check in</h3>
            </div>
        )
    }

