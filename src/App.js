import React, { Component } from 'react';
//fun is a default function, the name can be any random name
//funcions other than default needs to be in {} as shown below
import fun, {other} from './fun';
class App extends Component {
  constructor ()
  {
    super ();
    //fun() is a default function
    //other() is not default function whose name need to be exact as the function itself
    fun();
    other();
    this.state = {
      data: [],
    }
  }


  render() {
    return (
      <div>
      </div>
    );
  }
};

export default App;
