import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "../components/Col";
import SignupCard from "../components/SignupCard"


export default function Signup(){

 return(
    <Container>
    <Row>
        <Col lg="12" className = "submit-form-div">
            <SignupCard />
        </Col>
    </Row>
</Container>
 )
}