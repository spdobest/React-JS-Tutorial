import React, { Component } from 'react';
// import logo from '../assets/logo.svg';
import './App.css';
import User from '../components/User/users/User.js';
import Radium,{StyleRoot} from 'radium';
import ErrorBoundary from '../components/errorBoundary/ErrorBoundary';
import Users from '../components/User/Users';
class App extends Component {


  state = {
    users:[
      {id: '1',name:'Raju',email:'raju@gmail.com',age:'67', mobile:'12312312312'},
      {id: '2',name:'Banali',email:'bangali@gmail.com',age:'57', mobile:'12312312312'},
      {id: '3',name:'Satya',email:'satya@gmail.com',age:'33', mobile:'12312312312'},
      {id: '4',name:'Siba',email:'siba@gmail.com',age:'30', mobile:'12312312312'},
      {id: '5',name:'Prasad',email:'prasad@gmail.com',age:'32', mobile:'12312312312'}
    ],
    myPosition: "asdadad",
    showUser : false
  }

  deleteUserhandler = (userIndex) =>{
    // const userList = this.state.users.slice();
    const userList = [...this.state.users];
    userList.splice(userIndex,1);
    this.setState({users:userList});
  }

  userNameChangeHandler = (event,id) =>{

    const userIndex = this.state.users.findIndex(p =>{
      return p.id === id;
    });

    const user = {
      ...this.state.users[userIndex]
    };

    user.name = event.target.value;
    const users = [...this.state.users];
    users[userIndex] = user;
    this.setState({users:users});  
  }

  toggleUserHandler = () =>{
    const doesSHow = this.state.showUser;
    this.setState({showUser:!doesSHow});
  }
  
  render() {

    const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor:'pointer',
      ':hover': {
        backgroundColor:'lightgreen',
        color:'black'
      }
    };


    let persons = null;
    if(this.state.showUser){
      persons=(<div>

<Users
  users={this.state.users}
  clicked={this.deleteUserhandler}
  changed={this.userNameChangeHandler}
  />

        {this.state.users.map((person,index) =>{
          return <User 
          click={() => this.deleteUserhandler(index)}
          name={person.name}
          email={person.email}  
          age={person.age}
          mobile={person.mobile}
          key={person.id}
          onNameChange={(event) => this.userNameChangeHandler(event,person.id)}
          /> 
        })}
    </div>);
    style.backgroundColor = 'red';
  //  style.color = 'white';

    style[':hover'] =  {
      backgroundColor:'salmon',
      color:'black'
    }

    }


    // let classes = ['red','bold'].join( ' ');
    const classes = [];
    if(this.state.users.length <=2){
      classes.push('red');
    }

    if(this.state.users.length <=1){
      classes.push('bold');
    }

    return (
      <StyleRoot>
      <div className="App">
        <div className="App-header">
          <h1>Welcome to React JS LIST example</h1>
          <p className={classes.join(' ')}>This is Really Working!</p>
          <button 
                  style={style}
                  onClick={ this.toggleUserHandler }>Switch Name</button>
        </div> 
        {persons}
      </div>
      </StyleRoot>
    );
  }
}
export default Radium(App);
