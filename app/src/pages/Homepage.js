import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import Username from '../components/Username'
import {Link} from 'react-router-dom'

class Homepage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Username username="Przemysław"/>

        <Link to='/profile'>Profile</Link>
      </div>
    );
  }
}

export default Homepage;
