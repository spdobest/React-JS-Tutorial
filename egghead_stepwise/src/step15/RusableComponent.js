import React,{Component} from 'react'; 
import ReactDOM from 'react-dom';

class RusableComponent extends Component{

    constructor(){
        super();
        this.state = {
            red: 0
        }
        this.update = this.update.bind(this)
    }

    update(e){
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red.inp).value
        })
    }

    render(){
        return (
             <div>
                 <Slider ref="red" update = {this.update} />
                 {this.state.red}
             </div>    
        ) 
    }
} 


class Slider extends Component{
    constructor(){
        super();
        this.state = {
            selected: 'None'
        }
    } 
    render(){ 
        return(
            <div>
                <input ref="inp" type="range"
                min="0"
                max="100"
                onChange={this.props.update}
                />
            </div>    
        )
    }
} 


export default RusableComponent; 
