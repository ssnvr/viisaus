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

  //   fetch("/api/posts/")
  //     .then(res => res.json())
  //     .then(json => {
  //       console.log("posts")
  //       this.setState({
  //         data: json,
  //       });
  //     });
  // }

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
//       <div className="App">


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

        /* <Valikko />
       
        <Login />
        <Create /> */}
        {/* <Message data={this.state.data} /> */}
        {/* <PostList data={this.state.data} handleVote={this.handleVote} /> */}
        {/* <Create udata={this.state.udata} /> */}

      </div>
    )
  }
}


export default App;
