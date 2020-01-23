import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 
import Person from './Person/Person'

class App extends Component {

// here we will use state
state = {
  persons:[
    {name:'Siba', age:'25'},
    {name:'Silu', age:'26'},
    {name:'Satya', age:'29'},
    {name:'Narayan', age:'25'}
  ],
  otherStates: 'Some other values'

}

switchNameHandler = (newName,age) =>{
console.log("Cleicked");  
// this.state.persons[0].name = "Mohanty" dont do this, it will not automatically change in react in ui
this.setState({
  persons:[
    {name:newName, age:'125'},
    {name:'Silu Mohanty', age:'126'},
    {name:'Satya Mohanty', age:'129'},
    {name:'Narayan Mohanty', age:'125'}
  ]
})
}

nameChangedhandler = (event) =>{
  this.setState({
  persons:[
    {name:"asldjads", age:'125'},
    {name:event.target.value, age:'126'},
    {name:'Satya Mohanty', age:'129'},
    {name:'Narayan Mohanty', age:'125'}
  ]
})
}

  render() {


    const style={
      backgroundcolor: '#000',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      margin:'40px'
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <button 
        style={style}
        onClick={ ()=> this.switchNameHandler("On Button Click","123") }>Switch Name</button>

        <Person 
                onNameChange={this.nameChangedhandler}
                click={this.switchNameHandler.bind(this,"1St Person After Click","100")}
                name={this.state.persons[0].name}  
                age= {this.state.persons[0].age}>
        </Person>
        <Person 
                onNameChange={this.nameChangedhandler}
                click={this.switchNameHandler.bind(this,"2nd Person After Click","100")}
                name={this.state.persons[1].name}  
                age= {this.state.persons[1].age}>
          </Person>
         <Person 
                onNameChange={this.nameChangedhandler}
                click={this.switchNameHandler.bind(this,"3Rd Person After Click","100")}
                name={this.state.persons[2].name}  
                age= {this.state.persons[2].age} 
                > 
         </Person>
      </div>
    );
  }
}

export default App;
