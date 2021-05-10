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
                <p>1. Pause and breath for a moment</p>
<p>2. Ask yourself how you feel </p>
<p>3. Say emotion words out loud or write them on paper</p>
<p>Think about your feelings. Sit with them and let them be.
Ask yourself what you need. Say or list what could help you move forward</p>
               <CheckCard />
                </Col>
                </Row>
        </Container>

    )

}