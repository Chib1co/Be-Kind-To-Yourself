import React from "react";
import {Card} from "react-bootstrap";

export default function ActivityCard(props){
    return(
        <div className="result-card">
            
        {props.activities.map((activity) => {
          return (
           
              <Card key={activity._id} className="card-activity">
                <Card.Header id="card-header">Date: {activity.day}</Card.Header>
                <Card.Body>
                  <Card.Title id="card-title">Your Activity history</Card.Title>
                  <Card.Text className="card-text">
                    Your meditation time: {activity.meditation}
                  </Card.Text>
                  <Card.Text className="card-text">Your exercise: {activity.exercise}</Card.Text>
                  <Card.Text className="card-text">
                    Duration of your physical exercise: {activity.duration}
                  </Card.Text>
                </Card.Body>
              </Card>
           
          );
        })}
  
    </div>
    )
}