import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import API from "../utils/API"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginBtn from '../components/LoginBtn/Index';
import SignupBtn from '../components/SignupBtn';


export default function Result() {

    const [result, setResult] = useState({
        score: "",
        feeling: "",
        note: "",
        list: ""
    })

    useEffect(() => {
        API.getNewestResult()
            .then(res => {
                res.json();
            })
            .then(data => {
                setResult(data)
            })
        }, []);

        const history = useHistory();

        const handleRouteLogin = () => {
            history.push("/Login")
        }

        const handleRouteSingup = () => {
            history.push("/Signup")
        }



        return (
            <Container>
                <Row>
                    <Col>
                        <h3>Today's emotion</h3>
                        <p>todays date</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5>Your feeling score {result.score} /10 </h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>You are feeling {result.feeling}</h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Note: {result.note}</h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>What you think you need to move forward: {result.list}</h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>You can keep tracking your everyday emotion check</h6>
                        <LoginBtn handleRouteLogin={handleRouteLogin} />
                        <SignupBtn handleRouteSingup={handleRouteSingup} />
                    </Col>
                </Row>
            </Container>
        )
    }