import React from 'react'
import "./CheckCard.css"

export default function CheckCard(props) {

        return (
            <div>

<form onChange={props.handleSubmitChange}>
    <label> Score your emotion out of 10</label>
    <input 
     type="number"
     name="score"
     value={props.resultForm.score}>
    </input>
    <label>How you are feeling today</label>
    <input 
     type="text"
     name="feeling"
     value={props.resultForm.feeling}>
    </input>
    <label>Note: Why you are feeling so today</label>
    <input 
     type="text"
     name="note"
     value={props.resultForm.note}>
    </input>
    <label>List what you need to do to move forward</label>
    <input 
     type="text"
     name="list"
     value={props.resultForm.list}>
    </input>
 <button type="submit" onClick={props.handleSubmitResults}>Submit</button>
 </form>

                
            </div>
        )
    
}
