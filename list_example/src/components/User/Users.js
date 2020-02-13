import React from 'react'
import User from '../User/users/User';
import ErrorBoundary from '../errorBoundary/ErrorBoundary'

const users = (props) => props.users.map((person,index) =>{
        return <User 
        click={() => props.clicked(index)}
        name={person.name}
        email={person.email}  
        age={person.age}
        mobile={person.mobile}
        key={person.id}
        onNameChange={(event) => props.changed(event,person.id)}
        /> 
      });  
        
      export default users;