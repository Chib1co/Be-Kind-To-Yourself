import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CheckCard from "../components/CheckCard";
import CheckerText from "../components/CheckerText";
import API from "../utils/API";

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
    <Container>
      <Row>
        <Col>
          <div className="add-activity-form">
            <form className="activity-form">
              <label> Add how long you meditate</label>
              <input
                className="meditation-input"
                type="number"
                name="meditation"
                value={activity.meditation}
                onChange={handleSubmitChange}
              ></input>
              <br />
              <label>Add if you have done any physical exercises</label>
              <input
                className="exercise-input"
                type="text"
                name="exercise"
                value={activity.exercise}
                onChange={handleSubmitChange}
              ></input>
              <br />
              <label>How long did you do the exercise? </label>
              <input
                className="duration-input"
                type="number"
                name="duration"
                value={activity.duration}
                onChange={handleSubmitChange}
              ></input>
              <button
                type="submit"
                onClick={handleSubmitActivity}
                className="activity-submit-btn"
              >
                Submit
              </button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
