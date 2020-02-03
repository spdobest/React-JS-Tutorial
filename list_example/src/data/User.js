import React from 'react'
import './user.css'
const user = (props) =>{

    return(
        <div className = "User">
            <p > USER DETAILS</p> 
            
            <p> My name is : {props.name}</p> 
            <input type="text" onChange={props.onNameChange} value={props.name}/>
            <p> EMAIL : {props.email}</p> 
            <p> AGE : {props.age}</p> 
            <p> MOBILE : {props.mobile}</p> 
            <button  onClick={props.click}>DELETE USER</button>
        </div>
    )
}
export default user;