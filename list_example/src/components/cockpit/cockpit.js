import React from 'react';
import  classes from './Cockpit.css'

const Cockpit = (props) =>{

        const assignedClasses = [];
        let btnClass = '';
        btnClass = classes.red

        if(props.showUsers){
                btnClass = classes.red;
        }

        if(props.users.length <=2){
          assignedClasses.push(classes.red);
        }
    
        if(props.users.length <=1){
          assignedClasses.push(classes.bold);
        }


return (
    <div className="classes.Cockpit">
          <h1>Welcome to React JS LIST example</h1>
          <p className={classes.join(' ')}>This is Really Working!</p>
          <button 
                  className={btnClass}
                  onClick={ this.toggleUserHandler }>Switch Name</button>
        </div> 
);
};

export default Cockpit;