import { useState, useEffect } from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginBtn from '../components/LoginBtn';
import SigninBtn from '../components/SigninBtn';


export default function Result(){
    const [score, setScore] = useState("");
    const [emotion, setEmotion] = useState([]);
    const [note, setNote] = useState("");
    const [todo, setTodo] = useState("");


    return(
        <Container>
            <Row>
                <Col>
                <h3>Today's emotion</h3>
                <p>todays date</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <h5>Your feeling score {score} /10 </h5>
                </Col>
            </Row>
            <Row>
                <Col>
                <h6>You are feeling {emotion}</h6>
                </Col>
            </Row>
            <Row>
                <Col>
                <h6>Note: {note}</h6>
                </Col>
            </Row>
            <Row>
                <Col>
                <h6>What you think you need to move forward: {todo}</h6>
                 </Col>
            </Row>
            <Row>
                <Col>
                <h6>You can keep tracking your everyday emotion check</h6>
                <LoginBtn />
                <SigninBtn />
                </Col>
            </Row>
        </Container>
    )
}