import React, { Component } from 'react';
import './App.css';
import Valikko from './Components/Valikko';
import PostList from './Components/PostList';
import LandingPage from './Components/LandingPage';
import Moodvalinta from './Components/Moodvalinta';

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

  activateUser = (user) => this.setState({ activeUser: user });


  render = () => {
    return (
      <div className="App">

        {this.state.activeUser === null &&
          <LandingPage activateUser={this.activateUser}/>}

        {this.state.activeUser != null &&
          this.state.activeMood === null && <Moodvalinta changeMood={this.changeMood}/>}
          
        {this.state.activeMood != null &&
          <PostList data={this.state.data}
            activeUser={this.state.activeUser}
            activeMood={this.state.activeMood}
            changeMood={this.changeMood}
            />}
      </div>
    )
  }
}


export default App;
