import React, { Component } from 'react';
import Child from './Child';
class App extends Component {
  constructor (props){
    super(props)
    var childCall;
  }

  childCall = () => alert('This is call from Child');

    render() {
    return (
      <div>
    <h1><Child childCall={this.childCall.bind(this)} data="hello son"/></h1>
    </div>
    );
  }
};

export default App;
