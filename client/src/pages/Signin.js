import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "../components/Col";
import SigninCard from "../components/SigninCard"


export default function Signin(){

 return(
    <Container>
<div class="container form-card">
    <Row>
        <Col lg="12" className = "submit-form-div">
            <SigninCard />
        </Col>
    </Row>
</div>
</Container>
 )
}