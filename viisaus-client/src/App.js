import React, { Component } from 'react';
import './App.css';

// import Valikko from './Components/Valikko';

import Post from './Components/Post';
import Login from './Components/Login';
import Create from './Components/Create';
import PostList from './Components/PostList';


class App extends Component {
  state = {
    data: [],
    activeUser: null,
    activeMood: null,
  }

  componentDidMount() {
    fetch("/api/posts/")
      .then( res => res.json() )
      .then( json => {
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
        <Create />*/}
        <PostList data={this.state.data} handleVote={this.handleVote}/>

      </div>
    );
  }
}

export default App;
