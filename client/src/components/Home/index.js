import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import LoginBtn from "../components/LoginBtn";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css"

export default function Homecontent(props) {

        return (
            <div className="homecontent">
            <Row>
                <Col>
                    <h3> 5 Steps for Daily Emotions Check in</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Checking in with our thoughts and feelings should be an important part of every day. It’s a healthy technique that helps us to face our emotions, practice mindfulness, and consider what we need.
                    This is a great activity for kids and teenagers to practice self awareness, but also important to adults much the same.
The goal is everyone to check in with themselves from time to time. It’s a great life skill.</p>
<p>You can sign up your account, or log in to your account to keep tracking your everyday feeling, also activities you work on to move forward</p>
                </Col>
            </Row>
            </div>

        )
    
}



