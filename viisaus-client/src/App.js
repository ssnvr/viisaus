import React, { Component } from 'react';
import './App.css';
import Valikko from './Components/Valikko';
import PostList from './Components/PostList';
import LandingPage from './Components/LandingPage';

class App extends Component {
  state = {
    data: [],
    udata: [],
    activeUser: null,
    activeMood: null,
  }


  constructor(props) {
    super(props)
    this.activateUser = this.activateUser.bind(this);
  }


  changeMood = (mood) => {
    this.setState({
      activeMood: mood,
  })
}
  handleVote(e) {
    console.log(e.currentTarget);
    if (e.currentTarget.dataset.votedirection === "up") {
      console.log("lol")
    }
  }
  activateUser(user){
    this.setState({
      activeUser: user
    })
  }

  render() {
    return (

      <div className="App">
       
      {this.state.activeUser===null&&<LandingPage activateUser={this.activateUser}/>}

      {this.state.activeUser != null && <Valikko changeMood={this.changeMood}/>} 
      {this.state.activeMood != null && <PostList activeMood={this.state.activeMood} data={this.state.data} handleVote={this.handleVote}/>}
      
      </div>
    )
  }
}


export default App;
