import React,{Component} from 'react';
import { render } from 'react-dom';
import './person.css';

const person = (props) =>{
     return (<div className="Person"> 
                <p onClick={props.click}>  {props.children} </p>
                <input type="text" onChange={props.nameChange} value ={props.name}></input> 
                  <p> I am  {props.name} and my age is {props.age}</p>
                  <button onClick={props.deleteHandler}>Delete Person</button>
     </div>) 
};

export default person;