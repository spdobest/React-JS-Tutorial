import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const reactHook  = props => {


  const[personsState,setPersonsState] =  useState({
    persons:[
      {name:"Siba",age:"30"},
      {name:"Siba1",age:"31"},
      {name:"Siba2",age:"32"},
      {name:"Siba3",age:"33"},
    ],
    otherVariable:"asdasdas" 
  });

  console.log(personsState);

  const switchHandler = () =>{
    setPersonsState({
      persons:[
        {name:"Satya",age:"40"},
        {name:"Satya1",age:"41"},
        {name:"Satya2",age:"42"},
        {name:"Satya3",age:"43"},
      ],
      otherVariable:"Sibaprasad" 
    });
  };

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      <button onClick={switchHandler}>Switch name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>  My Hobbies </Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>  My Hobbies </Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>  My Hobbies </Person>
        <Person name={personsState.persons[3].name} age={personsState.persons[3].age}>  My Hobbies </Person> 
        
      </div>
    );
}
export default reactHook;
