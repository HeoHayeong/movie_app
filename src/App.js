import React from 'react';
import PropTypes from 'prop-types';

// class Component
class App extends React.Component {
  state = {
    count :0  
  };


  render(){
    return(<div>
      <h1> 숫자가 변한다 바로 {this.state.count} 으로!  </h1>
    </div>
  )}
}



export default App;