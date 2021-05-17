import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../utils/API";
import { Card, Button } from "react-bootstrap";

export default function SevendaysResults() {
  const [results, setResults] = useState({
    score: "",
    feelings: "",
    note: "",
    list: "",
  });

  useEffect(() => {
    loadSevenResults();
  }, []);

  function loadSevenResults() {
      //i need to pass id
    API.getResults().then((res) => {
      setResults(res.data);
      console.log(res)
    });
  }
  return (
          <Container>
    <div className="result-card">
      <ul>
        {results.map((result) => {
          return (
 
            <li>
              <Card>
                <Card.Header>{result.data.day}</Card.Header>
                <Card.Body>
                  <Card.Title>Your score was {result.data.score}</Card.Title>
                  <Card.Text>You were feeling {result.data.feelings}</Card.Text>
                  <Card.Text>Note why you were feeling so {result.data.note}</Card.Text>
                  <Card.Text>List you made for moving forward {result.data.list}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </li>
          );
        })}
      </ul>
    </div>
    </Container>
  );
}
