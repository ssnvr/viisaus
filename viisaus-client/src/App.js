import React, { Component } from 'react';
import './App.css';

// import Valikko from './Components/Valikko';

import Post from './Components/Post';
import Login from './Components/Login';
import Create from './Components/Create';
import PostList from './Components/PostList';


class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <Valikko /> */}
        <Post />
        <Login />
        <Create />
        <PostList/>

      </div>
    );
  }
}

export default App;
