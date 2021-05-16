import React from "react";
import Homecontent from "../components/Home"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useHistory } from "react-router-dom";
import LoginBtn from "../components/LoginBtn";
import SignupBtn from "../components/SignupBtn"
import API from "../utils/API";

export default function Home() {

    const history = useHistory();

    // const redirect = () => {
    //     history.push("/checker")
    // }
    const handleRouteLogin = () => {
        history.push("/Login")
    }
    const handleRouteSignup = () => {
        history.push("./signup")
    }

 
    return (

<Container>
<Homecontent />
<Row>
                <Col>
                    {/* <StartBtn redirect={redirect} variant="outlined" /> */}
                    <LoginBtn handleRouteLogin={handleRouteLogin} variant="outlined" />
                    <SignupBtn handleRouteSignup={handleRouteSignup} variant="outlined" />                  
                </Col>
            </Row>
             </Container>

    )

}