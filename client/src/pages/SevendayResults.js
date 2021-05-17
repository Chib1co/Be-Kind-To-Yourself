import React, { useState, useEffect } from "react";
// import { useHistory, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../utils/API";
import { Card, Button } from "react-bootstrap";
import ResultsCard from "../components/ResultsCard";
import ActivityCard from "../components/ActivityCard";

export default function SevendaysResults() {
  const [results, setResults] = useState([]);

  const [activities, setActivities] = useState([]);

  // const [cardData, setCardData] = useState([])

  useEffect(() => {
    function loadSevenResults() {
      API.getCurrentUserResult().then((res) => {
        setResults(res.data.data);
      });
    }

    function loadActivities() {
      API.getCurrentUserActivity().then((res) => {
        setActivities(res.data.data);
      });
    }
    loadSevenResults();
    loadActivities();
  }, []);

  useEffect(() => {
    console.log("test results", results);
  }, [results, activities]);
  // [results, activities]

  return (
    <Container>
      <Row>
        <Col lg="6">
          <ResultsCard results={results} />
        </Col>
        <Col lg="6">
          <ActivityCard activities={activities} />
        </Col>
      </Row>
    </Container>
  );
}
