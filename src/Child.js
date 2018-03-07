import React, { Component } from 'react';

class Child extends Component {
  constructor (props){
    super(props)
  }


    render() {
    return (
      <div>
    <h1>{this.props.data}</h1>
    <button onClick={()=>this.props.childCall()}>Click me</button>
    </div>
    );
  }
};

export default Child;
