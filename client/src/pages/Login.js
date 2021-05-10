import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "../components/Col";
import LoginCard from "react-bootstrap/Col"


export default function Login(){

 return(
    <Container>
<div class="container form-card">
    <Row>
        <Col lg="12" className = "submit-form-div">
            <LoginCard />
        </Col>
    </Row>
</div>
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