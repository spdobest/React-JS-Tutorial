import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class GetReference extends Component {

    constructor(){
        super();
        this.state = {
            a: '',
            b: ''
        } 
    }

    update(){ 
        this.setState({
            a: this.a.refs.input.value,
            b: this.refs.b.value
        })
    } 

    render(){
        return (
            <div>
            <h1>Event Handling Example</h1>
              <Input 
                ref={component => this.a = component}
                update={this.update.bind(this)} /> {this.state.a}
                <hr />
               <input 
                ref="b"
                type="text"
                onChange={this.update.bind(this)} /> {this.state.b}
            </div>
          );
    }
}

class Input extends Component{
    render(){
        return(
            <div><input ref="input" type='text' onChange={this.props.update} />   </div>
        )
    }
}  
    
export default GetReference;