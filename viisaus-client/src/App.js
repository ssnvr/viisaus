import React, { Component } from 'react';
import './App.css';

import Valikko from './Components/Valikko';

import Post from './Components/Post';
import Login from './Components/Login';
import Create from './Components/Create';
import PostList from './Components/PostList';
import { addNewMessage, getMessages } from './ServiceDesk';
import Message from './Components/Message';




class App extends Component {
  state = {
    data: [],
    udata: [],
    activeUser: null,
    activeMood: null,
  }

  componentDidMount() {
    fetch("/api/users/")
      .then(res => res.json())
      .then(json => {
        console.log('users')
        this.setState({
          udata: json,
        });
      });

    fetch("/api/posts/")
      .then(res => res.json())
      .then(json => {
        console.log("posts")
        this.setState({
          data: json,
        });
      });
  }


  handleVote(e) {
    console.log(e.currentTarget);
    if (e.currentTarget.dataset.votedirection === "up") {
      console.log("lol")
    }
  }

  render() {
    return (

      <div className="App">
        {/* <Valikko />
        <Post />
        <Login />
        <Create /> */}
        <Message data={this.state.data} />
        {/* <PostList data={this.state.data} handleVote={this.handleVote} /> */}
        <Create udata={this.state.udata} />

      </div>
    )
  }
}

export default App;
