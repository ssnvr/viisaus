import React, { Component } from 'react';
import Vote from './Components/Vote';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>lallalalalallaalall</p>
        <p> Moikkuli t. Anni</p>
        <Vote/>
      </div>
    );
  }
}

export default App;
