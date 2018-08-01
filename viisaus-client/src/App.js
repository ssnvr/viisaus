import React, { Component } from 'react';
import './App.css';

import Valikko from './Components/Valikko';

import Post from './Components/Post';
import Login from './Components/Login';
import Create from './Components/Create';
import PostList from './Components/PostList';
import { addNewMessage, getMessages } from './ServiceDesk';




class App extends Component {
  state = {
    data: [],
    udata:[],
    activeUser: null,
    activeMood: null,
  }

  componentDidMount() {
    fetch("/api/posts/")
      .then( res => res.json() )
      .then( json => {
        console.log('jee')
        this.setState({
          data: json,
        });
      });
  }
  componentDidMount() {
    fetch("/api/users/")
      .then( res => res.json() )
      .then( json => {
        console.log('jee')
        this.setState({
          udata: json,
        });
      });
  }


  handleVote(e) {
    console.log(e.currentTarget);
    if (e.currentTarget.dataset.votedirection === "up") {
      console.log("lol")
    }
  }

  // getMessagesAndUpdate=()=>{
  //   getMessages(function (list){
  //     this.setState({data: list});
  //   }.bind(this));
  // } //tämäkin on joku Annin hämärä funktio
   
  // addMessage= (msg)=>{
  //   addNewMessage(msg, function (){
  //     this.getMessagesAndUpdate();
  //   }.bind(this));
  // } //viesti ei lähety koska this.props.addMessage is not a function lol



  render() {
    return (
     
      <div className="App">
        <Valikko />
        <Post />
        <Login />

        <Create />
        {/* <PostList/> */}
        {/* <Message/> */}


        <Create />*/}
        {/* <PostList data={this.state.data} handleVote={this.handleVote} addMessage={this.addMessage}/> */}
        <PostList data={this.state.data} handleVote={this.handleVote} />
        <Create udata={this.state.udata} />

      </div>
    )}
}

export default App;
