import React, { Component } from 'react';
import './assets/App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
