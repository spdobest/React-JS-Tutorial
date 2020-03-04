import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class AppIterateWithMap extends Component{
    constructor(){
        super();
        this.state = {
            items: ["siba","satya","narayan","mohanty","Great ","personality"],
            name : "sibaprasad Mohanty"
        } 
    } 

    filter(e){
        this.setState({filter: e.target.value})
    }

    componentWillMount(){
     //   console.log('componentWillMount');
        // fetch('http://swapi.co/api/people/?format=json')
        // .then(response => response.json())
        // .then( ({results : items}) => this.setState({items})) 
       this.setState({items:["siba","satya","narayan","mohanty","Great ","personality"]});
    } 
    render(){ 
        let items = this.state.items;
        if(this.state.filter){
            items = items.filter( item => item.toLowerCase() )
            .includes(this.state.filter.toLowerCase())
            console.log(items);
        } 
    return (
        
        <div>
            <input type="text" onChange={this.filter.bind(this)}/>
            <h1>  Sibaprasad </h1>  
            
            {items.map(item =>
                <Person key={item} name = {item}/> 
            )}
        </div>
    )
    }
} 

const Person = (props) => <h4 key={props.name}>{props.name}</h4>


export default AppIterateWithMap;