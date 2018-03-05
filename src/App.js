import React, { Component } from 'react';

class App extends Component {
  constructor (){
    super ();
    this.state={
      data: [
        {
          id:1,
          name:'michael',
        },
        {
          id:2,
          name:'john',
        },
        {
          id:3,
          name:'smith',
        }
      ]
    }
  }
  render() {
    return (
      <div>
      {
        this.state.data.map((dynamicData,i) =>
        <div>
        <span>{dynamicData.id} </span>
        <span>{dynamicData.name}</span>
        </div>
      )
      }
      </div>
    );
  }
};

export default App;
