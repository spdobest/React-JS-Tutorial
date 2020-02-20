import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import AddPerson from './AddPerson/AddPerson';

class App extends Component {



  state = {
    persons:[
      {name:'Siba',age: '30', id: "0"},
      {name:'Siba1',age: '31', id: "1"},
      {name:'Siba2',age: '32', id: "2"},
      {name:'Siba3',age: '33', id: "3"}
    ],
    otherVariable: "Other variable",
    showPerson:false,
    addPersonIndex:"",
    addPersonName:"",
    addPersonAge:""
  };

  togglePersonHandler = () =>{
    console.log("switch cliecked");
    const doesSHow = this.state.showPerson;
    this.setState({ showPerson : !doesSHow});
  }

  addPersonhandler = () =>{
     console.log(this.state.addPersonAge+" "+this.state.addPersonName);
     const person = {key:this.state.addPersonIndex,name:this.state.addPersonName,age:this.state.addPersonAge};
     const personList = this.state.persons;
     console.log(person);
     personList.push(person);
     this.setState({persons:personList})
  }

  addPersonNameChangehandler = (ievent) =>{
     console.log("name is "+event.target.value);
     this.setState({
      addPersonName:event.target.value
     });
  }

  addPersonIndexChangehandler = (ievent) =>{
    console.log("name is "+event.target.value);
    this.setState({
     addPersonIndex:event.target.value
    });
 }

  addPersonAgeChangehandler = (ievent) =>{
    console.log("age is "+event.target.value);
    this.setState({
      addPersonAge:event.target.value
     });
  }


  switchHandler = (name) =>{
    console.log("Switch Is clicked");
    this.setState({
      persons:[
        {name:name,age: '40', id: "0"},
        {name:'Satya1',age: '41', id: "1" },
        {name:'Satya2',age: '42', id: "2" },
        {name:'Satya3',age: '43', id: "3" }
      ] 
    });
  }

  deletePersonHandler = (index) =>{
     const personList = this.state.persons;
     personList.splice(index,1);
     this.setState({persons:personList})
  }

  nameChangehHandler = (event,key) =>{

    console.log("Switch Is clicked "+key); 

    const personIndex = this.state.persons.findIndex(p =>{
      return p.key == key
    });

    const person = this.state.persons[personIndex];
    person.name = event.target.value;
    const person1 = {
      ...this.state.persons[personIndex]
    }

    // const person2 = Object.assign({},this.state.persons[personIndex]);

    const updatedPersons = [...this.state.persons];
    updatedPersons[personIndex] = person
 
    console.log(person);

    this.setState({
      persons:updatedPersons
    });

    // this.setState({
    //   persons:[
    //     {name: event.target.value ,age: '40' },
    //     {name: this.state.persons[1].name ,age: '41' },
    //     {name: this.state.persons[2].name ,age: '42' },
    //     {name: this.state.persons[3].name ,age: '43' }
    //   ]
    // });
  } 

  render() {
    const style = {
      backgroundColor:'whte',
      font:'inherit',
      border:'2px solid blue',
      padding: '10px',
      margin:'20px'
    }

    let personList = null;
    if(this.state.showPerson){
      personList = ( 
        <div>
            {this.state.persons.map((person,index) =>{
            return <Person 
                    click={this.switchHandler.bind(this,'MAX')} 
                    name={person.name} 
                    age={person.age}
                    id={person.id}
                    nameChange={(event) => this.nameChangehHandler(event,person.key)}
                    deleteHandler = { () => this.deletePersonHandler(index)}
                  />
            })}
        </div>
      );
    }

    return ( 
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      <AddPerson  
      addPersonhandler={this.addPersonhandler} 
      personAgeChange={this.addPersonNameChangehandler}
      personNameChange={this.addPersonAgeChangehandler}
      personIndexChange={this.addPersonIndexChangehandler}
      />
      <button style={style} onClick={ this.togglePersonHandler}>Switch name</button>
        {personList}
      </div>
    );
  }
}

export default App;
