import React, { Component } from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import './App.css';

import PostList from './Components/PostList';
import LandingPage from './Components/LandingPage';
import Moodvalinta from './Components/Moodvalinta';
import Spinner from './Components/Spinner';

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props)

    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.activateUser = this.activateUser.bind(this);
    this.changeMood = this.changeMood.bind(this);
    this.deactivateUser = this.deactivateUser.bind(this);
    this.isLoading = this.isLoading.bind(this);

    const { cookies } = props;

    this.state = {
      activeUser: cookies.get('user') || null,
      activeMood: null,
      isLoading: false
    }
  }
  
  changeMood = (mood) => this.setState({ activeMood: mood });
  activateUser = (user) => this.setState({ activeUser: user });
  deactivateUser = (user) => {
    const {
      cookies,
    } = this.props;

    cookies.set('user', null, { path: '/' });
    this.setState({ activeUser: null, activeMood: null })
  }

  isLoading = () => this.setState({ isLoading: true });
  
  componentDidUpdate() {
    const {
      activeUser,
      isLoading,
    } = this.state;


    const {
      cookies,
    } = this.props;
      

    if (isLoading && activeUser) {
      this.setState({ isLoading: false })
      cookies.set('user', activeUser, { path: '/' });
    }

  }

  render = () => {
    return (
      <div className="App">
        {this.state.activeUser === null && !this.state.isLoading &&
          <LandingPage activateUser={this.activateUser} isLoading={this.isLoading}/>}

        {this.state.isLoading && this.state.activeUser === null &&
          <Spinner />
        }
        {this.state.activeUser != null &&
          this.state.activeMood === null && 
          <Moodvalinta changeMood={this.changeMood} />}

        {this.state.activeMood != null &&
          <PostList data={this.state.data}
            activeUser={this.state.activeUser}
            activeMood={this.state.activeMood}
            changeMood={this.changeMood}
            deactivateUser={this.deactivateUser}
          />}
      </div>
    )
  }
}


export default withCookies(App);
