import React, { Component } from 'react';

class App extends Component {
  refFunc(){
    alert(this.refs.myInput.value);
  }
  render() {
    return (
      <div>
      <input type="text" ref="myInput"/>
      <button onClick={this.refFunc.bind(this)}>Click here</button>
      </div>
    );
  }
};

export default App;
