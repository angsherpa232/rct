import React, {
  Component
} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import About from './about';
import Baccha from './baccha';
import Home from './home';

class App extends Component {

  render() {
    return (
    <Router>
    <div>
  <ul>
  <li><Link to="/home">Home</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/baccha">Baccha</Link></li>
  <hr/>
  </ul>
  <Route exact path="/" component={Home}/>
  <Route path="/about" component={About}/>
  <Route path="/baccha" component={Baccha}/>
    </div>
    </Router>
    )
  }
};

export default App;
