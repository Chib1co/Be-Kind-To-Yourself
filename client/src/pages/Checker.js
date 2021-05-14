import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import CheckCard from "../components/CheckCard";
import API from "../utils/API"


export default function Home() {
    let history = useHistory();


    const [resultForm, setResultForm] = useState({
        score: "",
        feeling: "",
        note: "",
        list: ""
    })

    function handleSubmitChange(event) {
        const {name, value} = event.target;
        setResultForm({...resultForm, [name]: value.trim()})
    };

    function handleSubmitResults(e){
        e.preventDefault();
        if(resultForm.score && resultForm.feeling){
            API.postResults({
                score: resultForm.score,
                feeling: resultForm.feeling,
                note: resultForm.note,
                list: resultForm.list
            })
            .then((res) => {
                if(res.status === 200){
                    history.push("/result")
                }
            })
            .catch(err => console.log(err));
        }
    }
    return (
        <Container>
            <Row>
                <Col>
                    <h3> Your Daily Eomtion Check</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Follow the steps and answer the questions</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <p>1. Pause and breath for a moment</p>
<p>2. Ask yourself how you feel </p>
<p>3. Say emotion words out loud or write them on paper</p>
<p>Think about your feelings. Sit with them and let them be.
Ask yourself what you need. Say or list what could help you move forward</p>
               <CheckCard resultForm={resultForm} 
               handleSubmitChange={handleSubmitChange}
               handleSubmitResults={handleSubmitResults}/>
                </Col>
                </Row>
        </Container>

    )

}