import React, {Component} from 'react';

class AppState extends Component {

    constructor(){
        super();
        this.state = {
            txt: 'This is State txt',
            cat: 123
        }
    }

    updateTxt(e){
        console.log(e.target.value);
        this.setState({txt: e.target.value})
    }

    updateCat(e){
        console.log(e.target.value);
        this.setState({cat: e.target.value})
    }

    render(){
        return (
            <div>
            <h1>State Example</h1>
            <b>txt Value from State is {this.state.txt}</b>
            <b>Cat Value from State is {this.state.cat}</b>
           
                <input type="text" placeholder="ENter txt"
                onChange = {this.updateTxt.bind(this)} /> 

                <input type="text" placeholder="Enter Cat"
                onChange = {this.updateCat.bind(this)} /> 
            </div>
          );
    }
}

export default AppState;