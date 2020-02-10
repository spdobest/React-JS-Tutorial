import React from 'react'
import User from '../User/users/User';
import ErrorBoundary from '../errorBoundary/ErrorBoundary'
const users = (props) =>(
    users.map((person,index) =>{
        return <ErrorBoundary key={person.id}>
    <User 
        click={() => props.deleteUserhandler(index)}
        name={person.name}
        email= {person.email}  
        age= {person.age}
        mobile= {person.mobile}
        key={person.id}
        onNameChange = {(event) => props.userNameChangeHandler(event,person.id)}
        />
        </ErrorBoundary>
      })
);
export default users;