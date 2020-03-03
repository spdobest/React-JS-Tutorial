import React, { Component} from 'react';  
import PropTypes from 'prop-types'

class App extends Component {
  render() {
    return (
      <div>
      <h1>Hello React</h1>
      <b>Welcome to react tutorial</b> 
      <p>
      <b>Props value is : {this.props.txt}</b>

      </p>
      
      </div>
    );
  }
}

App.propTypes = {
  // txt: React.ProtoTypes.object,
  // cat: React.ProtoTypes.number.isRequired
}

export default App;
