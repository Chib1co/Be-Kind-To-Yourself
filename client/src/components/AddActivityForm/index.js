import React from 'react'
import "./AddActivityForm.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AddActivityForm(props){
    return(
        <div className="add-activity-form">
            <form className="activity-form">
              <label>How long did you meditate today?</label>
              <input
                className="meditation-input"
                type="number"
                name="meditation"
                value={props.activity.meditation}
                onChange={props.handleSubmitChange}
              ></input>
              <br />
              <label>Have you done any physical exercise?</label>
              <input
                className="exercise-input"
                type="text"
                name="exercise"
                value={props.activity.exercise}
                onChange={props.handleSubmitChange}
              ></input>
              <br />
              <label>How long did you do the exercise? </label>
              <input
                className="duration-input"
                type="number"
                name="duration"
                value={props.activity.duration}
                onChange={props.handleSubmitChange}
              ></input>
              <button
              className="activity-submitBtn"
                type="submit"
                onClick={props.handleSubmitActivity}
              >
                Submit
              </button>
            </form>
          </div>
    )
}