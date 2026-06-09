import React, { useState } from 'react'
import './Input.css'


const Input = ({onSubmit}) => {

const [input, setInput] = useState("");

const handleSubmit = (event) => {
    if (!input) {
        return;
    }
  event.preventDefault();
  onSubmit(input);
  setInput("");
}



  return (
    <div className="input-container">
        <input
        className='input-text'
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task"
        />
        <button className="input-button" onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default Input