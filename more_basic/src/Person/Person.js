import React from 'react'
import './person.css'

const person = (props) =>{
return (
    <div className = "Person">
        <p onClick={props.click}>Name : {props.name} Age : {props.age}</p>
        <input type="text" onChange={props.onNameChange} value = {props.name}/>
    </div>
)
}

export default person;