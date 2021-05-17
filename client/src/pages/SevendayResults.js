import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../utils/API";
import { Card, Button } from "react-bootstrap";
import ResultCard from "../components/Card"

export default function SevendaysResults() {
  const [results, setResults] = useState({
    score: "",
    feelings: "",
    note: "",
    list: "",
  });

  const [activity, setActivity] = useState({
    meditation: "",
    exercise: "",
    duration: ""
  })

  useEffect(() => {
    loadSevenResults();
    loadActivities()
  }, []);

  function loadSevenResults() {
      //i need to pass id
    API.getCurrentUserResult().then((res) => {
      setResults(res.data);
      console.log(results)
    });
  }

  function loadActivities(){
    API.getCurrentUserActivity()
    .then((res) => {
      setActivity(res.data)
    })
  }
  return (
    // <ResultCard results={results}/>
          <Container>
    <div className="result-card">
      <ul>
        {results.map((result) => {
          return (
 
            <li>
              <Card>
                <Card.Header>day{result.day}</Card.Header>
                <Card.Body>
                  <Card.Title>Your score was {result.score} </Card.Title>
                  <Card.Text>You were feeling {result.feelings}</Card.Text>
                  <Card.Text>Note why you were feeling so {result.note}</Card.Text>
                  <Card.Text>List you made for moving forward {result.list}</Card.Text>

                  <Card.Text>Your meditation time {activity.meditation}</Card.Text>
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
