import React, { Component } from 'react';
class App extends Component {
  constructor (){
    var edit;
    super();
    this.state={
      data : [
        {
          name: 'jordan'
        },
        {
          name: 'keli'
        },
        {
          name: 'sid'
        },
      ]
    }
  }

  edit = (key)=>
  {
    console.log(this.refs[key].innerText='I am clicked')
    this.refs[key].style.color='blue'
  }

    render() {
    return (
      <div>
      {
        this.state.data.map((displayData, key) =>
        <button ref={key} onClick={()=>this.edit(key)}>{displayData.name}</button>
      )
      }
    </div>
    );
  }
};

export default App;
