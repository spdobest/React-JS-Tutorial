import React from 'react'
import './user.css'
const user = (props) =>{

    return(
        <div className = "User">
            <p1> USER DETAILS</p1>
            <p1> NAME : {props.name}</p1>
            <p1> AGE : {props.age}</p1>
            <p1> EMAIL : {props.email}</p1>
            <p1> MOBILE : {props.mobile}</p1>
        </div>
    )
}

export default user;