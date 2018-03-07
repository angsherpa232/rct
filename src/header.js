import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class Header extends Component {
  render ()
  {
    return (
      <div className="header">
      <img className="logo" src='https://www.rust-lang.org/logos/rust-logo-256x256.png'/>
      <ul className="menu-ul">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/baccha">Baccha</Link></li>
      </ul>
      </div>
    )
  }
}

export default Header;
