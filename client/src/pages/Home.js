import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StartBtn from "../components/StartBtn";
import LoginBtn from "../components/LoginBtn";
import { useHistory } from "react-router-dom";
import API from "../utils/API";

export default function Home() {

    const history = useHistory();

    const redirect = () => {
        history.push("/checker")
    }
    const handleRouteLogin = () => {
        history.push("/Login")
    }

    function logOut() {
        API.userLogout();
        history.go(0); // refreshes the page, but we could push them back to login page
      }
    

    return (
        <Container>
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
                </Col>
            </Row>
            <Row>
                <Col>
                    <StartBtn redirect={redirect} variant="outlined" />
                    <LoginBtn handleRouteLogin={handleRouteLogin} variant="outlined" />
                    <div><button type="button" onClick={logOut}>
    Logout
 </button></div>
                </Col>
            </Row>
        </Container>

    )

}