import React, { Component } from 'react';
class App extends Component {

//fetching is throwing error
  componentWillMount (){
    fetch('./request.php')
    .then((response)=>response.json())
    .then((responseJson)=>
    {
    console.log(responseJson)
    })
  }

    render() {
    return (
      <div className="App">
      <h1>Call php web service</h1>
      </div>
    );
  }
};

export default App;
