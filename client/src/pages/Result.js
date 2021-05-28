import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import API from "../utils/API";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ShowResult from "../components/ShowResult";
import AddActivityBtn from "../components/AddActivityBtn";
import Plot from "react-plotly.js";

export default function Result() {
  const [result, setResult] = useState({
    score: "",
    feeling: "",
    note: "",
    list: "",
  });

  const [options, setOptions] = useState();

  useEffect(() => {
    function loadResult() {
      API.getNewestResult().then((res) => {
        setResult(res.data);
        console.log(res.data.data);
      });
    }

    function getChart() {API.getCurrentUserResult().then((res) => {
      console.log("getCurrentUserResult" + res.data.data)
  

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
  }
    loadResult()
    getChart()
  }, []);

  // function loadResult() {
  //   API.getNewestResult().then((res) => {
  //     setResult(res.data);
  //     console.log(res.data);
  //   });
  // }


  const history = useHistory();

  const handleRouteAddActivity = () => {
    history.push("/addactivity");
  };

  // const handleRouteCheckChart = () => {
  //   history.push("/charts");
  // };

  return (
    <Container>
      <Row>
        <Col lg="5" md="12" sm="12">
       
      <ShowResult result={result} />
      <div
        className="link-btns"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AddActivityBtn  
        handleRouteAddActivity={handleRouteAddActivity} 
        />
        {/* <CheckChartBtn handleRouteCheckChart={handleRouteCheckChart} /> */}
      </div>
      </Col>
      <Col lg="7"  md="12" sm="12">
      <div 
      className="chart" data={options}>
     
            <Plot
              data={options}
              layout={{ height: 360, title: "Last 7 scores", color: "brown"}}
            />
          </div>
     
      </Col>
      </Row>
      
    </Container>
  );
}
