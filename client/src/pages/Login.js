import React, {useState, useContext} from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "../components/Col";
import LoginCard from "../components/LoginCard"
import API from "../utils/API"
import {Auth} from "../utils/Auth"



export default function Login(){

const { setIsAuthenticated } = useContext(Auth)

const [formState, setFormState] = useState({
    email:"",
    password: ""
})

const [hasErrorState, setHasErrorState] = useState(false);

const history = useHistory();

function handleInputChange(event) {
    console.log(event)
    console.log(formState)
    const {name, value} = event.target;
    setFormState({ ...formState, [name]: value.trim()})
  };

function handleFormSubmit(e){
    e.preventDefault();
    setHasErrorState(false);
    if(formState.email && formState.password) {
        API.userLogin({
            email: formState.email,
            password: formState.password
        })
        .then(response => {
            if(response.data.id) {
                setIsAuthenticated(true);
                history.push("/")
            }else{
                setHasErrorState(true)
            }
        })
        .catch(err => {
            setFormState({
                email: "",
                password: ""
            });
            setHasErrorState(true);
            console.log(err)
        });
    }
    }

 return(
    <Container>
    <Row>
        <Col lg="12" className = "submit-form-div">

        <div className="card shadow login-card">
    <h2 className="sign-log-in">Login Form</h2>
    <form className="login">
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
        <button type="submit" disabled={!(formState.email && formState.password)} onClick={handleFormSubmit} className="form-btn btn btn-default logbtn">Login</button>
        { hasErrorState ? <strong>Invalid details, try again</strong> : '' }
    </form>
    <br />
    <p className="login-btn-links">Or sign up <a href="/signup">here</a></p>
    <p className="login-btn-links"><a href="/">Go back to Home</a></p>
</div>

        </Col>
    </Row>
</Container>


// <div id="error-modal-bg" class="modal-bg">
//     <div class="add-review-modal">
//         <div class="error-modal-div">
//             <div class="error-heading">
//                 <i class="fas fa-times-circle fa-3x"></i>                
//                 <h4>Oops!</h4>
//                 <p>
//                     An error occurred whilst handling your request.<br>
//                     Please refresh the page or try again later.
//                 </p>
//             </div>
//             <div class="nav-btn-div">
//                 <button id="error-ok-btn" class="confirm-btn" type="submit">Okay</button>
//             </div>
//         </div>
//     </div>
// </div>

/* <!-- Login message modal -->  */
/* <div id="login-error-modal-bg" class="modal-bg">
    <div class="add-review-modal">
        <div class="login-error-modal-div">
            <div class="login-error-heading">
                <i class="far fa-frown-open fa-3x"></i>              
                <h4>Incorrect login details</h4>
                <p>
                    You entered an incorrect email or password.
                </p>
            </div>
            <div class="nav-btn-div">
                <button id="login-error-ok-btn" class="confirm-btn" type="submit">Okay</button>
            </div>
        </div>
    </div>
</div> */


)
}