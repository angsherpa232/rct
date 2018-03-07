import React, {
  Component
} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import About from './about';
import Baccha from './baccha';
import Home from './home';
import Header from './header';

class App extends Component {

  render() {
    return (
      <Router>
    <div>
    <Header />
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/baccha" component={Baccha}/>
    </div>
    </Router>
    )
  }
};

export default App;
