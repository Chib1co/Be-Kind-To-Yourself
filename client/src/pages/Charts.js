import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Plot from "react-plotly.js";
import API from "../utils/API";

export default function Chart() {
  const [options, setOptions] = useState();


  useEffect(() => {
    API.getCurrentUserResult().then((res) => {
  

      const y = res.data.data.slice(-7).map((result) => {
          return result.score
      });
      const x = res.data.data.slice(-7).map(result => result.day)
      setOptions([
        {
          x,
          y,
          options: {
              scales: {
                  xAxes: [
                      {
                          type: 'time'
                      }
                  ]
              }
          },
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "brown" },
        },
        
      ]);
    });
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <div className="chart">
     
            <Plot
              data={options}
              layout={{ width: 640, height: 480, title: "7 Days Score" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

render(<Chart />, document.getElementById("root"));
