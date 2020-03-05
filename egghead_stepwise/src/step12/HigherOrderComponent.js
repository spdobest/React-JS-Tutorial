import React,{Component} from 'react';
import ReactDOM from 'react-dom';

const HOC = (InnerComponent) => class extends Component{

    constructor(){
        super();
        this.state = {
            count: 0
        }
    }
    update(){
        this.setState({count: this.state.count+1})
    }
    componentWillMount(){
        console.log('componentWillMount');
    }

    render(){
        return(
            <InnerComponent
            {...this.props}
            {...this.state}
            update={this.update.bind(this)}
            />
        )
    }
}

class HigherOrderComponents extends Component{

    constructor(){
        super();
        this.state = {
            name: 'siba'
        }
    }


    render(){
        return (
            <div>
                <Button>button</Button>
                <hr/>
                <LabelHOC>label</LabelHOC>
            </div>    
        ) 
    }

}


const Button = HOC((props) => <button onClick={props.update}>{props.children} - {props.count}</button>)

class Label extends Component{
    componentWillMount(){
        console.log(' lebel componentWillMount');
    }
    render(){
        return(
        <label onMouseMove={this.props.update}>{this.props.children} - {this.props.count}</label>
        )
    }
}

const LabelHOC = HOC(Label)


export default HigherOrderComponents