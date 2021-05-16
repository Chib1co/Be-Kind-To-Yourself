import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CheckCard from "../components/CheckCard";
import CheckerText from "../components/CheckerText"
import API from "../utils/API";

export default function Checker() {
  let history = useHistory();

  const [resultForm, setResultForm] = useState({
    score: "",
    feelings: "",
    note: "",
    list: "",
  });

  function handleSubmitChange(event) {
    const { name, value } = event.target;
    setResultForm({ ...resultForm, [name]: value.trim() });
  }

  function handleSubmitResults(e) {
    e.preventDefault();
    if (resultForm.score && resultForm.feelings) {
      API.postResults({
        score: resultForm.score,
        feelings: resultForm.feelings,
        note: resultForm.note,
        list: resultForm.list,
      })
        .then((res) => {
          if (res.status === 200) {
            history.push("/result");
          }
        })
        .catch((err) => console.log(err));
    }
  }
  return (
    <Container>
      {/* <div className="checker-text">
      <Row>
        <Col>
          <h3> Your Daily Emotion Check</h3>
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
          <p>
            Think about your feelings. Sit with them and let them be. Ask
            yourself what you need. Say or list what could help you move forward
          </p>
        </Col>
      </Row>
      </div> */}
    <Row>
        <Col>
       
      <CheckerText />
   
          <CheckCard
            resultForm={resultForm}
            handleSubmitChange={handleSubmitChange}
            handleSubmitResults={handleSubmitResults}
          />
    </Col>
    </Row>
    </Container>

  );
}
