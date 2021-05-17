import React from "react";
import { Card } from "react-bootstrap";
// import AddActivityBtn from "../AddActivityBtn"
import "./ResultsCard.css"

export default function ResultsCard(props) {
    return(
        <div className="result-card">
          
              {props.results &&
                props.results.slice(-7).map((result) => {
                  return (
                   
                      <Card key={result._id} className="card-results">
                        <Card.Header className="card-header" id="card-header">Date: {result.day}</Card.Header>
                        <Card.Body>
                          <Card.Title id="card-title">
                            Your score was: {result.score}
                          </Card.Title>
                          <Card.Text className="card-text">
                            You were feeling: {result.feelings}
                          </Card.Text>
                          <Card.Text className="card-text">
                            Note why you were feeling so: {result.note}
                          </Card.Text>
                          <Card.Text className="card-text">
                            List you made for moving forward: {result.list}
                          </Card.Text>
                          {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                      </Card>
                    
                  );
                })}
           
          </div>
    )

}