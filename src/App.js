import React, { Component } from 'react';
//This is the imported component
import Element from './element';

class App extends Component {
  constructor () {
    super();
    this.state = {
      header: "This is a header part",
      content: "This is a content part"
    }
  }

//Function to update the state with setState function
  btnHand ()
  {
    this.setState({
      header: "New header text"
    })
  }

  render() {
    return (
      <div className="App">
      <p>{this.state.header}</p>
      <button onClick={this.btnHand.bind(this)}>Click</button>
      </div>
    );
  }
};

export default App;
