import React,{Component} from 'react';
import './addPerson.css'

const addPerson =  (props) =>{
    return (<div className="AddPerson"> 
                <h1>Enter Person Details</h1>
                <p><input type="text"   onChange={props.personIndexChange} ></input></p>  
                <p><input type="text"   onChange={props.personNameChange}></input></p>    
                <p><input type="number" onChange={props.personAgeChange}></input></p>    
                <p><button onClick={props.addPersonhandler}>  Add Person </button></p>  
     </div>) 
}

export default addPerson;