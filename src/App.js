import React, { Component } from 'react';

class App extends Component {
  constructor ()
  {
    super();
    this.state = {
      data: "",
    }
  }

//Function to handle the change in input field
handle (event){
  this.setState({
    data: event.target.value
  })
}

  render() {
    return (
      <div className="App">
      <input type="text" onChange={this.handle.bind(this)}/ >
      <h1>{this.state.data}</h1>
      </div>
    );
  }
};

export default App;
