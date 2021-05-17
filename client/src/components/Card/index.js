import React from "react";
import { Card, Button } from "react-bootstrap";

export default function ResultCard(props) {
    return(
        <div style={{ width: "360px" }}>
        <div className="styleCard" >
          <Card
            Date={props.day}
            score={props.score}
            feelings={props.feelings}
            list={props.list}
          />
        </div>
      </div>
    )
}