import React, { Component } from 'react';
class App extends Component {
  constructor (){
    super();
    var operation;
    this.state = {
      showMe: true
    }
  }

operation=()=>this.setState({
  showMe: !this.state.showMe
})

    render() {
    return (
      <div>
      <h1>
      Show and hide Elements
      </h1>
      {
        this.state.showMe?
        <div>
        Please hide me
        </div>
        :null
      }

      <button onClick={()=>this.operation()}>Click me</button>
      </div>
    );
  }
};

export default App;
