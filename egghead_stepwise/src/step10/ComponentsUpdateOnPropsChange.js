import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class ComponentsUpdateOnPropsChange extends Component{
    constructor(){
        super();
        this.state = {
            increasing: false
        }
        this.update = this.update.bind(this)
    }
    update(){
        ReactDOM.render( 
            <ComponentsUpdateOnPropsChange val ={this.state.val+1} />,document.getElementById('root')
         )
        this.setState({val: this.state.val+1});
    }
    componentWillMount(){
        console.log('componentWillMount');
        this.setState({m: 2});
    }

    componentWillReceiveProps(nextProps){
        this.setState( {increasing: nextProps.val > this.props.val} )
    }
   
    componentDidMount(){
        console.log('componentDidMount');       
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');       
    }
    render(){
        console.log(this.state.increasing);
    return <button onClick={this.update.bind(this)}>  {this.props.val}</button>  
    }
}

ComponentsUpdateOnPropsChange.defaultProps = {val: 0}

export default ComponentsUpdateOnPropsChange;