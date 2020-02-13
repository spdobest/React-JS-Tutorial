import React from 'react'
import './user.css'
import Radium,{StyleRoot} from 'radium';
const user = (props) =>{

const style = {
    '@media (min-width: 500px)':{
        width: '450px'
    }
}

    return(
        <StyleRoot>
        <div className="User" style={style} >
            <p > USER DETAILS</p> 
            
            <p> My name is : {props.name}</p> 
            <input type="text" onChange={props.onNameChange} value={props.name}/>
            <p> EMAIL : {props.email}</p> 
            <p> AGE : {props.age}</p> 
            <p> MOBILE : {props.mobile}</p> 
            <button  onClick={props.click}>DELETE USER</button>
        </div>
        </StyleRoot>
    )
}
export default Radium(user);