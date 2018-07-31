import React, { Component } from 'react';
import Vote from './Components/Vote';
import './App.css';
import Post from './Post';

class App extends Component {
  componentDidMount() {
    fetch("/api/posts/")
      .then( res => res.json() )
      .then( json => {
        this.setState({
          data: json,
        });
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Post/>
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
