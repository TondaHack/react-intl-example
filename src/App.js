import React, { Component } from 'react';
import { FormattedMessage, FormattedDate, FormattedRelative } from 'react-intl';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <FormattedMessage id="name" />
          <br/>
          <FormattedDate value={Date.now()} />
          <br/>
          <FormattedMessage values={{name: "John"}} id="greetings" />
          <br/>
          <FormattedRelative value={Date.now()}/>
          <br/>
          <a href="https://github.com/yahoo/react-intl/wiki/Components">Documentation</a>
        </div>
      </div>
    );
  }
}

export default App;
