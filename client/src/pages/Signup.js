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
        console.log("test sign up")
        if (formState.email && formState.password && formState.firstname && formState.lastname) {
            API.userSignup({
                firstname: formState.firstname,
                lastname: formState.lastname,
                email: formState.email,
                password: formState.password
            })
                .then((res) => {

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
                <Col lg="12" className="submit-form-div">
                    {/* <SignupCard
                        formState={formState}
                        handleInputChange={handleInputChange}
                        handleFormSubmit={handleFormSubmit} /> */}
                            <form className="signup">
    <div className="form-group">
            <label htmlFor="exampleInputFirstname1">First name</label>
            <input type="firstname" 
            name="firstname"
            onChange={handleInputChange} 
            value={formState.firstname} 
            className="form-control" 
            id="firstname-input" 
            placeholder="Firstname" />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputLastname1">Last name</label>
            <input type="lastname" 
            name="lastname"
            onChange={handleInputChange} 
            value={formState.lastname} 
            className="form-control" 
            id="lastname-input" 
            placeholder="Lastname" />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" 
            name="email"
            onChange={handleInputChange} 
            value={formState.email} 
            className="form-control" 
            id="email-input" 
            placeholder="Email" />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" 
            name="password"
            onChange={handleInputChange} 
            value={formState.password} 
            className="form-control" 
            id="password-input" 
            placeholder="Password" />
        </div>
        <button type="submit" disabled={!(formState.email && formState.password)}
                onClick={handleFormSubmit} className="form-btn btn btn-default logbtn">Sign up</button>
    </form>

                </Col>
            </Row>
        </Container>
    )
}