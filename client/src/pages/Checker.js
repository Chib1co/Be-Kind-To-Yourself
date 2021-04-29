import React from "react";
import Container from "react-bootstrap/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import CheckCard from "../components/CheckCard";


export default function Home() {
    return (
        <Container>
            <Row>
                <Col>
                    <h3> Your Daily Eomtion Check</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Follow the steps 1 to 5 and answer the questions</p>
                </Col>
            </Row>
            <Row>
                <Col>
               <CheckCard />
                </Col>
                </Row>
        </Container>

    )

}