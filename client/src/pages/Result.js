import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import API from "../utils/API";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import LoginBtn from '../components/LoginBtn';
// import SignupBtn from '../components/SignupBtn';
import ShowResult from "../components/ShowResult";
import AddActicityBtn from "../components/AddActivityBtn";
import CheckChartBtn from "../components/CheckChartBtn";

export default function Result() {
  const [result, setResult] = useState({
    score: "",
    feeling: "",
    note: "",
    list: "",
  });

  useEffect(() => {
    loadResult();
  }, []);

  function loadResult() {
    API.getNewestResult().then((res) => {
      setResult(res.data);
      console.log(res.data);
    });
  }

  // const dateObj = result.day
  // const month = dateObj.getMonth() + 1; //months from 1-12
  // var day = dateObj.getDate();
  // var year = dateObj.getFullYear();

  // const newdate = day + "/" + month + "/" + year

  const history = useHistory();

  const handleRouteAddActivity = () => {
    history.push("/addactivity");
  };

  const handleRouteCheckChart = () => {
    history.push("/charts");
  };

  return (
    <Container>
      <ShowResult result={result} />
      <div
        className="link-btns"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AddActicityBtn  
        handleRouteAddActivity={handleRouteAddActivity} 
        />
        <CheckChartBtn handleRouteCheckChart={handleRouteCheckChart} />
      </div>
    </Container>
  );
}
