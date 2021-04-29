import React from "react";
import Container from "react-bootstrap/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import StartBtn from "../components/StartBtn";
import LoginBtn from "../components/LoginBtn";

export default function Home() {
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
                <StartBtn />
                <LoginBtn />
                </Col>
                </Row>
        </Container>

    )

}