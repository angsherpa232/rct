import React, { Component } from 'react';
import Child from './Child';
class App extends Component {
  constructor (props){
    super(props)
    this.state={
      data :[
      {
        name: 'john',
        id: 10,
        detail: [
          {
            email: 'john@gmail.com',
            contact: '9999'
          }
        ],
      },
      {
      name: 'david',
      id: 11,
      detail: [
        {
          email: 'david@gmail.com',
          contact: '8888'
        }
      ],
    },
    {
      name: 'sam',
      id: 12,
      detail: [
        {
          email: 'sam@gmail.com',
          contact: '898989'
        }
      ],
    }
    ]
  }
  }

    render() {
    return (
      <div>
      {
        this.state.data.map((datarow,i)=>
        <div>
        {"Name: " + datarow.name}
        {
          (typeof(datarow.detail) == 'object')?
            <div>
            {datarow.detail.map((subrowData, k)=>
              <div>
              <div>{"Email: " + subrowData.email}</div>
              <div>{"Contact: " + subrowData.contact}</div>
              </div>
            )}
            </div>
            :
            null
        }
        </div>
      )
      }
        </div>
      )
  }
};

export default App;
