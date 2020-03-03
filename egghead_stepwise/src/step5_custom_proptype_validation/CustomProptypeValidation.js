import React, {Component} from 'react';

class CustomProptypeValidation extends Component { 

    render(){
        return (
            <div>
            <h1>Custom Prop Type Validation Example</h1> 
            <Title />
            </div>
          );
    }
}

const Title = (props) => <h1> Title: {props.text} </h1>

Title.prototype = {
    text(props,propName,component){
        if(!(propName in props)){
            return new Error('Missing ${propName}');
        }
        if(!(props[propName].length < 6)){
            return new Error('Length of  ${propName} must be 6 ');
        }
    }
}

export default CustomProptypeValidation;