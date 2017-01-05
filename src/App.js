import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>To-Do Demo App</h2>
        </div>
        <TestLink />
      </div>
    );
  }
}

export default App;

const STATUS = {
  NORMAL: 'normal',
  HOVERED: 'hovered',
}

export class TestLink extends Component {

  constructor (props) {
    super (props)

    this._onMouseEnter = this._onMouseEnter.bind(this)
    this._onMouseLeave = this._onMouseLeave.bind(this)

    this.state = {
      class: STATUS.NORMAL,
    }
  }

  _onMouseEnter () {
    this.setState({class: STATUS.HOVERED})
  }
  _onMouseLeave () {
    this.setState({class: STATUS.NORMAL})
  }

  render () {

    // const style = {
    //   a.hover {
    //     backgroundColor: '#FFA500';
    //   }
    // }
    return (
      <div>

        <a className={this.state.class}
          href={this.props.page || '#'}
          onMouseEnter={this._onMouseEnter}
          onMouseLeave={this._onMouseLeave}
          target="blank">
          {this.props.children || <h2>Some Demo Link</h2>}
        </a>
      </div>
    )
  }
}
