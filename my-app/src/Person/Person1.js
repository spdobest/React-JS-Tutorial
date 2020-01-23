import { Component } from "react";
import React from 'react';

// class Person extends Component{
// }

const person1 = (props) =>{
return (
    <div>
    <p onClick={props.click}> My name is {props.name} and my age is {props.age}</p>
    <p>{props.children}</p>
    </div>
)
};

export default person1;