import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../utils/API"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "../components/Col";
import SignupCard from "../components/SignupCard"


export default function Signup() {
    let history = useHistory();

    const [formState, setFormState] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    })


    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value.trim() })
    };

    function handleFormSubmit(e) {
        e.preventDefault();
        // console.log("test sign up")
        if (formState.email && formState.password && formState.firstname && formState.lastname) {
            API.userSignup({
                firstname: formState.firstname,
                lastname: formState.lastname,
                email: formState.email,
                password: formState.password
            })
                .then((res) => {
                    console.log(res)

                    if (res.status === 200) {
                        history.push("/checker");
                    }
                })
                .catch(err => console.log(err));

        }
    }
    return (
        <Container>
            <Row>
                <Col lg="8" className="submit-form-div">
                    <SignupCard
                        formState={formState}
                        handleInputChange={handleInputChange}
                        handleFormSubmit={handleFormSubmit} />
                           
                </Col>
            </Row>
        </Container>
    )
}