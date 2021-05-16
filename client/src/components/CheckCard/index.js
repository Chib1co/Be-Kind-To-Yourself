import React from 'react'
import "./CheckCard.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function CheckCard(props) {

        return (
    <div className="checker">
<Row>
    <Col>
    
<form className="emotion-checker">
    <label> Score your emotion out of 10</label>
    <input 
    className="emotion-input"
     type="number"
     name="score"
     value={props.resultForm.score}
     onChange={props.handleSubmitChange}>
    </input>
    <br />
    <label>How you are feeling today</label>
    <input 
    className="emotion-input"
     type="text"
     name="feelings"
     value={props.resultForm.feelings}
     onChange={props.handleSubmitChange}>
    </input>
    <br />
    <label>Note: Why you are feeling so today</label>
    <input 
    className="emotion-input"
     type="text"
     name="note"
     value={props.resultForm.note}
     onChange={props.handleSubmitChange}>
    </input>
    <br />
    <label>List what you need to do to move forward</label>
    <input 
    className="emotion-input"
     type="text"
     name="list"
     value={props.resultForm.list}
     onChange={props.handleSubmitChange}>
    </input>
    <br />
 <button type="submit" onClick={props.handleSubmitResults} className="result-submit-btn">Submit</button>
 </form>
 </Col>
</Row>
</div>    

        )
    
}
