import React from "react";
import Homecontent from "../components/Home"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useHistory } from "react-router-dom";
import LoginBtn from "../components/LoginBtn/Index.js";
import SignupBtn from "../components/SignupBtn";
import StartCheckBtn from "../components/StartCheckBtn"
import Hero from "../components/HeroHome";

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
    const handleRouteStartCheck = () => {
        history.push("./checker")
    }

 
    return (

<Container>
    <Row>
        
<Hero backgroundImage={process.env.PUBLIC_URL + "/images/aaron-burden-3TmLV0fLzfU-unsplash.jpg"} />
       
    </Row>
   
<Homecontent />
      
<Row>
                <Col>
                    {/* <StartBtn redirect={redirect} variant="outlined" /> */}
                    <LoginBtn handleRouteLogin={handleRouteLogin} variant="outlined" />
                    <SignupBtn handleRouteSignup={handleRouteSignup} variant="outlined" />
                    <StartCheckBtn handleRouteStartCheck={handleRouteStartCheck} variant="outlined" />                   
                </Col>
            </Row>
             </Container>
           

    )

}