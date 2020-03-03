
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ComponentLifecycle extends Component {

    constructor(){
        super();
        this.state = { 
            val: 0 ,
            life:''
        }
        this.update = this.update.bind(this) 
    }

    update(){ 
        this.setState({
            val: this.state.val+1 })
    } 

    // lifecycle methods

    componentDidMount(){
        console.log('componentDidMount');
        this.setState({life:'componentDidMount'});
    }

    componentWillMount(){
        console.log('componentWillMount');
        this.setState({life:'componentWillMount'});
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
        this.setState({life:'componentWillUnmount'});
    } 
    componentWillUpdate(){
       // console.log('componentWillUpdate');
      //  this.setState({life:'componentWillUpdate'});
    }

    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
        this.setState({life:'componentWillReceiveProps'});
    }

    componentDidUpdate(){
        // console.log('componentDidUpdate');
        // this.setState({life:'componentDidUpdate'});
    }



    compone

    render(){
        console.log('render');
        return (
            <div>
            <h1>Component Life Cycle Example</h1>
               <button onClick={this.update}> {this.state.val} </button>
               <button> LifeCycle Of the COmponent is {this.state.life} </button>
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
    
export default ComponentLifecycle; 