 import React,{Component} from 'react';
import ReactDOM from 'react-dom'; 

class ReactChildrenUtilities extends Component{

    constructor(){
        super();
        this.state = {
            name: 'siba'
        }
    }


    render(){
        return (
            <Parent>
                <div className="childA"> </div>
                <div className="childB"> </div>
            </Parent>  
        ) 
    }
} 


class Parent extends Component{
    componentWillMount(){
        console.log(' lebel componentWillMount');
    }
    render(){
        let items = React.Children
        .map(child => console.log(items))
        return null
    }
} 


export default ReactChildrenUtilities