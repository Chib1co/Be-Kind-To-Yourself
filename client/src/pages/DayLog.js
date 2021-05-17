import {useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../utils/API";
import {Auth} from "../utils/Auth"

export default function Daylog() {

    const [result, setResult] = useState({
        score:"",
        feeling: "",
        note: "",
        list:"",
        date: ""
    });

    useEffect(() => {
        API.getActivity()//how to figure id ???
        .then(res => {
            return res.json();
        })
        .then(data => {
            setResult(data)
        })
    }, [result.date])

    return(
        <Container>
            <Row>
                <Col>
                <h3>{result.date} Result</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                <h3>{result.score} /10 your emotion score</h3>
                </Col>
            </Row>
        </Container>
    )
}