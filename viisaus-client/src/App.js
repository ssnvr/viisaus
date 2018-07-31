import React, { Component } from 'react';
import './App.css';

import Valikko from './viisaus-client/src/Valikko';

import Post from './Components/Post';
import Login from './Components/Login';
import Create from './Components/Create';


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

    
        <Post/>
        <Login/>
        <Create/>
            

      </div>
    );
  }
}

export default App;
