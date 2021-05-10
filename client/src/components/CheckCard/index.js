import React from 'react'
import "./CheckCard.css"

export default function CheckCard(props) {
    // const [score, setScore] = useState("");
    // const [emotion, setEmotion] = useState([]);
    // const [note, setNote] = useState("");
    // const [todo, setTodo] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("check result submitted");
        // reset();
    }
        return (
            <div>

<form onSubmit={handleSubmit}>
    <label> Score your emotion out of 10</label>
    <input 
     type="number"
     value={props.score}>
    </input>
    <label>How you are feeling today</label>
    <input 
     type="text"
     value={props.emotion}>
    </input>
    <label>Note: Why you are feeling so today</label>
    <input 
     type="text"
     value={props.note}>
    </input>
    <label>List what you need to do to move forward</label>
    <input 
     type="text"
     value={props.todo}>
    </input>
 <button type="submit">Submit</button>
 </form>

                
            </div>
        )
    
}
