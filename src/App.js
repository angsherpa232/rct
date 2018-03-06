import React, { Component } from 'react';
class App extends Component {
  constructor (){
    super();
    var callMe;
  }

  callMe = () => alert("Hello world");
    render() {
    return (
      <div className="App">
      <h1>React event handling</h1>
      <button onClick={()=>this.callMe()}>Click me</button>
      </div>
    );
  }
};

export default App;
