import React, { Component } from 'react';
import './App.css';
import Valikko from './Components/Valikko';
import Post from './Components/Post';
import Login from './Components/Login';
import Create from './Components/Create';
import PostList from './Components/PostList';
import { addNewMessage, getMessages } from './ServiceDesk';
import LandingPage from './Components/LandingPage';
import Message from './Components/Message';

class App extends Component {

  constructor(props) {
    super(props)
    this.activateUser = this.activateUser.bind(this);
    this.changeMood = this.changeMood.bind(this);
    this.state = {
        activeUser: null,
        activeMood: null,
      }
  }

  changeMood = (mood) => {
    this.setState({
      activeMood: mood,
    })
  }

  handleVote = (e) => {
    if (e.currentTarget.dataset.votedirection === "up") {
      console.log("lol")
    }
  }

  activateUser = (user) => this.setState({ activeUser: user });

  render = () => {
    return (
      <div className="App">
        {this.state.activeUser === null && <LandingPage activateUser={this.activateUser}/>}
        {this.state.activeUser != null && this.state.activeMood === null && <Valikko changeMood={this.changeMood}/>}
        {this.state.activeMood != null && <PostList data={this.state.data} handleVote={this.handleVote}/>}
      </div>
    )
  }
}


export default App;
