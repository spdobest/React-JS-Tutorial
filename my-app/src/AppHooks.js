import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Person1 from './Person/Person1';

const myApps=props => { 

    const [ personsState,setPersonsState]  = useState({
        persons:[
          {name:'Siba', age:'25'},
          {name:'Silu', age:'26'},
          {name:'Satya', age:'29'},
          {name:'Narayan', age:'25'}
        ],
        otherStates: 'Some other values'
      });

      const [otherState,setOtherState] = useState('Some other value');

      useState('Some other values');  // you can define as much as use states

      const switchNameHandler = () =>{
        console.log("Cleicked");  
        // this.state.persons[0].name = "Mohanty" dont do this, it will not automatically change in react in ui
        setPersonsState({
          persons:[
            {name:'Siba Mohanty', age:'125'},
            {name:'Silu Mohanty', age:'126'},
            {name:'Satya Mohanty', age:'129'},
            {name:'Narayan Mohanty', age:'125'}
          ],otherStates:personsState.otherStates
        });
      };

    return (
       <div className="AppHooks">
         <h1>Hello SIbaprasad, welcome to React js</h1>
         <p>DO some dummy project to get familiar with React JS</p>
         <h2>DO some dummy project to get familiar with React JS</h2>
         <Person name="Siba" age = "29"/>
         <Person name="Satya" age = "35"/>
         <Person name="Person 1" age = "39"/>
         <Person1 name="Person 2" age = "29">  <u><b>hey   Person2 how are you</b></u> </Person1>
         <Person1 name="Silu" age = "33">  
         <u><b>Hey person mr , where r you going</b></u></Person1>
         <button onClick = {switchNameHandler}>Switch Name</button>
         <Person name={personsState.persons[0].name} age={personsState.persons[0].age}> </Person>
         <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> </Person>
         <Person name={personsState.persons[2].name} age={personsState.persons[2].age}> </Person>
        </div>
      // React.createElement('div',null,React.createElement('h1',{className:'App'},'Hello SIbaprasad, welcome to React js'))
    );

}; 
export default myApps;
