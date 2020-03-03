import React, {Component} from 'react';

class AccessNestedData extends Component {

    constructor(){
        super(); 
    } 

    render(){
        return (
            <div>
            <h1>Accesss Nested Data with React Props Children</h1>
            <Button > React</Button>
            <Button >  i <Heart/> React</Button>
            </div>
          );
    }
}


const Button = (props) => <button>{props.children}</button> 
    
class Heart extends Component{
    render(){
        return (
            <span> &hearts;</span>
          );
    }

}  

export default AccessNestedData;