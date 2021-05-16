import React from 'react'
import "./ShowResult.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ShowResult(props) {
    return(
        // <Container>
        <div className="showResult">
                <Row>
                    <Col>
                        <h3>Today's emotion</h3>
                        <p>Date: {props.result.day}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5>Your feeling score <span className="score">{props.result.score} /10 </span></h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>You are feeling <span className="feelings"> {props.result.feelings} </span></h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Note:<span className="note">{props.result.note}</span> </h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>What you think you need to move forward: <span className="list">{props.result.list}</span></h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/* <h6>You can keep tracking your everyday emotion check</h6>
                        <LoginBtn handleRouteLogin={handleRouteLogin} />
                        <SignupBtn handleRouteSingup={handleRouteSingup} /> */}
                    </Col>
                </Row>
                </div>
            // </Container>
    )
}