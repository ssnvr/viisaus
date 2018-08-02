import React, { Component } from 'react';
import './App.css';
import Valikko from './Components/Valikko';
import PostList from './Components/PostList';
import LandingPage from './Components/LandingPage';

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

      <Valikko/>
      <Post/>
      <Message/>
       {/* {this.state.activeUser===null&&<LandingPage activateUser={this.activateUser}/>} */}

      {/* {this.state.activeUser != null && <Valikko changeMood={this.changeMood}/>}   */}
      {/* this.state.activeMood != null && <PostList data={this.state.data} handleVote={this.handleVote}/> */}
      
         {/* <Valikko /> */}
        {/* <Post />
        <Login />

        <Create />
        <PostList />
        <Message />

        <Create />

        /* <PostList data={this.state.data} handleVote={this.handleVote} addMessage={this.addMessage}/> */

        {this.state.activeUser === null && <LandingPage activateUser={this.activateUser}/>}
        {this.state.activeUser != null && this.state.activeMood === null && <Valikko changeMood={this.changeMood}/>}
        {this.state.activeMood != null && <PostList data={this.state.data} handleVote={this.handleVote} activeMood={this.state.activeMood}/>}

      </div>
    )
  }
}


export default App;
