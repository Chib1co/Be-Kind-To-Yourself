import React from 'react'
import "./CheckCard.css"

export default function CheckCard(props) {

        return (
            <div>

<form >
    <label> Score your emotion out of 10</label>
    <input 
     type="number"
     name="score"
     value={props.resultForm.score}
     onChange={props.handleSubmitChange}>
    </input>
    <label>How you are feeling today</label>
    <input 
     type="text"
     name="feeling"
     value={props.resultForm.feeling}
     onChange={props.handleSubmitChange}>
    </input>
    <label>Note: Why you are feeling so today</label>
    <input 
     type="text"
     name="note"
     value={props.resultForm.note}
     onChange={props.handleSubmitChange}>
    </input>
    <label>List what you need to do to move forward</label>
    <input 
     type="text"
     name="list"
     value={props.resultForm.list}
     onChange={props.handleSubmitChange}>
    </input>
 <button type="submit" onClick={props.handleSubmitResults}>Submit</button>
 </form>

                
            </div>
        )
    
}
