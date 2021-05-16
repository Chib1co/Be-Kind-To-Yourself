import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./CheckerText.css";

export default function CheckerText() {
    return(
        <div className="checker-text">
      <Row>
        <Col>
          <h3> Your Daily Emotion Check</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="guidence">Follow the steps and answer the questions</p>
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
      </div>
    )
}