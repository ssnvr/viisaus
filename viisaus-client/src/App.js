import React, { Component } from 'react';
import Vote from './Components/Vote';
import './App.css';
import Post from './Components/Post';
import Login from './Components/Login';
import Create from './Components/Create';

class App extends Component {
  render() {
    return (
      <div className="App">
    
        <Post/>
        <Login/>
        <Create/>
        <Vote/>
      </div>
    );
  }
}

export default App;
