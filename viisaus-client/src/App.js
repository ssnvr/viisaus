import React, { Component } from 'react';
import './App.css';
import Valikko from './Components/Valikko';
import Post from './Components/Post';
import Login from './Components/Login';
import Create from './Components/Create';

class App extends Component {
  render() {
    return (
      
      <div className="App">

        <Valikko />
        <Post />
        <Login />
        <Create />

      </div>
    );
  }
}

export default App;
