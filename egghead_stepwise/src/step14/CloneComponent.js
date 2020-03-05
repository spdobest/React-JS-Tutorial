import React,{Component} from 'react'; 

class CloneComponent extends Component{

    constructor(){
        super();
        this.state = {
            name: 'siba'
        }
    }


    render(){
        return (
            <Buttons>
                <button value='A'>A</button>
                <button value='B'>B</button>
                <button value='C'>C</button>
            </Buttons> 
        ) 
    }
} 


class Buttons extends Component{
    constructor(){
        super();
        this.state = {
            selected: 'None'
        }
    }
    selectedItem(selected){
        console.log(selected);
        this;this.setState({selected: selected});
    } 
    render(){
        // let items = this.props.children;
        let fn = child => 
        React.cloneElement(child,{
            onClick: this.selectedItem.bind(this,child.props.value)
        })
        let items =  React.Children.map(this.props.children,fn)
        return(
            <div>
                <h2> You Have selected : {this.state.selected} </h2>
                {items}
            </div>    
        )
    }
} 


export default CloneComponent;
