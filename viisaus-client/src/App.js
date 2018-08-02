import React, { Component } from 'react';
import './App.css';
import PostList from './Components/PostList';
import LandingPage from './Components/LandingPage';
import Moodvalinta from './Components/Moodvalinta';
import LoadingScreen from 'react-loading-screen';

class App extends Component {

  constructor(props) {
    super(props)
    this.activateUser = this.activateUser.bind(this);
    this.changeMood = this.changeMood.bind(this);
    this.state = {
      activeUser: null,
      activeMood: null,
      isLoading: true
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
      // <LoadingScreen
      //   loading={false}
      //   bgColor='#f1f1f1'
      //   spinnerColo='#9ee5f8'
      //   textColor='#676767'
      //   text='Loading'
      // >
      <div className="App">


          {this.state.activeUser === null &&
            <LandingPage activateUser={this.activateUser} />}

          {this.state.activeUser != null &&
            this.state.activeMood === null && <Moodvalinta changeMood={this.changeMood} />}

          {this.state.activeMood != null &&
            <PostList data={this.state.data}
              activeUser={this.state.activeUser}
              activeMood={this.state.activeMood}
              changeMood={this.changeMood}
            />}

        </div>
      // </LoadingScreen>

    )
  }
}


export default App;
