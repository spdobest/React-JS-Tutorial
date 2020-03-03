import React, {Component} from 'react';

class AppChildren extends Component {

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

            <Widget updateTxt={this.updateTxt.bind(this)}
                    updateCat={this.updateCat.bind(this)}/>
                    <Widget updateTxt={this.updateTxt.bind(this)}
                    updateCat={this.updateCat.bind(this)}/>
                    <Widget updateTxt={this.updateTxt.bind(this)}
                    updateCat={this.updateCat.bind(this)}/>
                    <Widget updateTxt={this.updateTxt.bind(this)}
                    updateCat={this.updateCat.bind(this)}/>
               
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
    


export default AppChildren;