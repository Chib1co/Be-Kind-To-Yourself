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
