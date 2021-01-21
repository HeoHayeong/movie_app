import React from 'react';
import PropTypes from 'prop-types';

// class Component
class State extends React.Component {
  state = {
    count :0  
  };
y
  add = () => {
    console.log("add");
    this.setState(current => ({count: current.count + 1 }));
  };
  minus = () => {
    console.log("minus");
    this.setState(current=> ({count: current.count - 1 }));
  };


  render(){ 
    return(<div>
      <h1> 숫자가 변한다 바로 {this.state.count} 으로!  </h1>
      <button onClick={this.add}>➕</button>
      <button onClick={this.minus}>➖</button>
    </div>
    );
  }
}



export default State;