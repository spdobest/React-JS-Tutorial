import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class LifeCycleWithState extends Component{
    constructor(){
        super();
        this.state = {val:0}
        this.update = this.update.bind(this)
    }
}