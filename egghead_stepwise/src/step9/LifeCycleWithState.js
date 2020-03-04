import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class LifeCycleWithState extends Component{
    constructor(){
        super();
        this.state = {val: 0}
        this.update = this.update.bind(this)
    }
    update(){
        this.setState({val: this.state.val+1});
    }
    componentWillMount(){
        console.log('componentWillMount');
        this.setState({m: 2});
    }
   
    componentDidMount(){
        console.log('componentDidMount');       
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');       
    }
    render(){
        console.log('render');
    return <button onClick={this.update}>  {this.state.val*this.state.m}</button>  
    }
}

export default LifeCycleWithState;