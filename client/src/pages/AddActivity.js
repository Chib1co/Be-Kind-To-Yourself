import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CheckCard from "../components/CheckCard";
import CheckerText from "../components/CheckerText";
import AddActivityForm from "../components/AddActivityForm"
import API from "../utils/API";
import HeroActivity from "../components/HeroActivity"

export default function AddActivity() {
  let history = useHistory();

  const [activity, setActivity] = useState({
    meditation: "",
    exercise: "",
    duration: "",
  });

  // const{id} = useParams()
  // useEffect(() => {
  //     API.getUser(id)
  //     .then(res => setActivity({
  //       user_id:(res.data.id)
  //     })
  //     )
  // }, [])

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
        if (res.stats === 200) {
          history.push("/charts");
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
