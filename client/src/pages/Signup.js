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
        if (formState.email && formState.password && formState.username) {
            API.userSignup({
                email: formState.email,
                username: formState.username,
                password: formState.password
            })
                .then((res) => {

                    if (res.status === 200) {
                        history.push("/");
                    }
                })
                .catch(err => console.log(err));

        }
    }
    return (
        <Container>
            <Row>
                <Col lg="12" className="submit-form-div">
                    <SignupCard
                        formState={formState}
                        handleInputChange={handleInputChange}
                        handleFormSubmit={handleFormSubmit} />

                </Col>
            </Row>
        </Container>
    )
}