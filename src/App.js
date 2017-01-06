import React, { Component } from 'react';
import logo from './logo.svg';
import Link from './Link.react'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>To-Do Demo App</h2>
        </div>
        <Link />
      </div>
    );
  }
}

export default App;
