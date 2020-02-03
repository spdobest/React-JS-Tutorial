import React from 'react'
import './header.css'

const header = (props) =>{
    return(
        <div className = "Header">
            <input type="text" value = {props.name} onChange={props.oTextChange} placeholder="YPlease ENter Text"/>
            <p>Click to delete</p>
            <button  onClick={props.click}>Submit</button>
        </div>
    )
}

export default header

