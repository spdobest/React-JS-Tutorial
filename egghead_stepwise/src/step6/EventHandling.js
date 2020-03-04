import React, {Component} from 'react';

class EventHandling extends Component {

    constructor(){
        super();
        this.state = {
            currentEvent: '---------'
        }
        this.update = this.update.bind(this);
    }

    update(e){
        console.log(e.target.value);
        this.setState({currentEvent: e.type})
    } 

    render(){
        return (
            <div>
            <h1>Event Handling Example</h1>
             <textarea
             onKeyPress={this.update}
             onCopy = {this.update} 
             onPaste={this.update}
             onCut={this.update}
             onBlur={this.update}
             onTouchEnd={this.update}
             cols='30'
             rows='10'
             />
             <h1>Current state is {this.state.currentEvent}</h1>
               
            </div>
          );
    }
}

const Widget = (props) => <div>
                                <input type="text" placeholder="ENter txt"
                                        onChange = {props.updateTxt.bind(this)} /> 
                                <input type="text" placeholder="Enter Cat"
                                        onChange = {props.updateCat.bind(this)} /> 
                            </div>
    


export default EventHandling;