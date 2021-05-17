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
          {/* <div className="result-card">
          
              {results &&
                results.map((result) => {
                  return (
                   
                      <Card key={result._id}>
                        <Card.Header>day{result.day}</Card.Header>
                        <Card.Body>
                          <Card.Title>
                            Your score was: {result.score}{" "}
                          </Card.Title>
                          <Card.Text>
                            You were feeling: {result.feelings}
                          </Card.Text>
                          <Card.Text>
                            Note why you were feeling so: {result.note}
                          </Card.Text>
                          <Card.Text>
                            List you made for moving forward: {result.list}
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    
                  );
                })}
           
          </div> */}
        </Col>
        <Col lg="6">
        <ActivityCard activities={activities} />
          {/* <div className="result-card">
            
              {activities.map((activity) => {
                return (
                 
                    <Card key={activity._id}>
                      <Card.Header>day{activity.day}</Card.Header>
                      <Card.Body>
                        <Card.Title>Your Activity history</Card.Title>
                        <Card.Text>
                          Your meditation time {activity.meditation}
                        </Card.Text>
                        <Card.Text>Your exercise {activity.exercise}</Card.Text>
                        <Card.Text>
                          Duration of your physical exercise {activity.duration}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                 
                );
              })}
        
          </div> */}
        </Col>
      </Row>
    </Container>
  );
}
