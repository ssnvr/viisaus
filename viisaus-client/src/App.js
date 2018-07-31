import React, { Component } from 'react';
import './App.css';
import Message from './Components/Message';

// import Valikko from './Components/Valikko';

import Post from './Components/Post';
import Login from './Components/Login';
import Create from './Components/Create';
import PostList from './Components/PostList';


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
  // addMessage = (newMessage) =>{
  //   createMessage()
  // }
  render() {
    return (
      <div className="App">

        {/* <Valikko /> */}
        <Post />
        <Login />
        <Create />
        <PostList/>
        <Message/>

      </div>
    );
  }
}

export default App;
