import React, { Component } from 'react';
// import logo from './logo.svg';
import Link from './Link.react';
// import  './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>To-Do Demo App</h2>
        </div>
        <Body />
        <Link />
      </div>
    );
  }
}

export default App;

export const Body = () => {
  return (
    <div>
      <h2>This is the Body!!!!!!!!</h2>
      <h3>More stuff will go here</h3>
    </div>
  )
}
