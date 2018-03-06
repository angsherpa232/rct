import React, { Component } from 'react';
class App extends Component {
  constructor (){
    super();
    this.state = {
      data: [
        {
          name: "john",
          email: "john@gmail.com"
        },
        {
          name: "kevin",
          email: "kevin@gmail.com"
        },
        {
          name: "sam",
          email: "sam@gmail.com"
        },
      ]
    }
  }
    render() {
    return (
      <div className="App">
      <h1>Map function</h1>
      <h1>Map function in react</h1>
      {
        this.state.data.map((rowdata, key)=>
        <div>
        <span>{key} </span>
        <span>{rowdata.name} </span><br/>
        <span> {"  "}{rowdata.email} </span>
        </div>
      )
      }
      </div>
    );
  }
};

export default App;
