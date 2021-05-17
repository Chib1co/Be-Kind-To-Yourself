import React, { useState} from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddActivityForm from "../components/AddActivityForm"
import API from "../utils/API";
import HeroActivity from "../components/HeroActivity"
// import { useAlert } from 'react-alert'


export default function AddActivity() {
  let history = useHistory();

  const [activity, setActivity] = useState({
    meditation: "",
    exercise: "",
    duration: "",
  });


  function handleSubmitChange(event) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value.trim() });
  }

  function handleSubmitActivity(event) {
    event.preventDefault();
    API.postActivities({
      meditation: activity.meditation,
      exercise: activity.exercise,
      duration: activity.duration,
    })
      .then((res) => {
        if (res.status === 200) {
          history.push("/SevendayResults");
          // console.log("hello")
        }
      })
      .catch((err) => console.log(err));
  }
  return (
        <HeroActivity backgroundImage={process.env.PUBLIC_URL + "/images/vahid-kanani-ksONS6t3ksI-unsplash.jpg"}>
    <Container>

      <Row>
        <Col>
        <AddActivityForm activity={activity} 
        handleSubmitChange={handleSubmitChange}
        handleSubmitActivity={handleSubmitActivity}
        />

        </Col>
      </Row>
    </Container>
    </HeroActivity>
  );
}
