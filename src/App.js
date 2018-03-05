import React, { Component } from 'react';

class App extends Component {
  constructor ()
  {
    super ();
    this.state = {
      data: [],
    }
  }

  componentDidMount ()
  {
    fetch('https://facebook.github.io/react-native/movies.json')
    .then((Response)=>Response.json())
    .then((finalResponse)=>{
      console.log(finalResponse.movies);
      this.setState({
        data: finalResponse.movies,
      })
    })
  }

  render() {
    return (
      <div>
      {
        this.state.data.map((dynamicData,key) =>
        <div>
        <span>{key} </span>
          <span>{dynamicData.title}: </span>
          <span>{dynamicData.releaseYear}</span>
        </div>
      )
      }
      </div>
    );
  }
};

export default App;
