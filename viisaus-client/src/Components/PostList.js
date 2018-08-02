import React, { Component } from 'react';
import Post from './Post';
import Message from './Message';
import Valikko from './Valikko';
import Spinner from './Spinner';
import '../App.css';
import { getMessagesWithEmoijtag, getMessages } from '../ServiceDesk';
import './PostList.css';

class PostList extends Component {


  constructor(props){
    console.log("constructor")
    super(props);
    this.state = {
      data: [],
      activeMood: this.props.activeMood,
      activeUser: this.props.activeUser,
      isLoading: false,
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.updateMessages = this.updateMessages.bind(this);
    this.getAllPosts = this.getAllPosts.bind(this);
  }

  componentDidMount(){
      console.log("componentDidMount")
    this.setState({
      isLoading: true,
    });
    getMessagesWithEmoijtag(this.state.activeMood, function(res) {
      this.updateMessages(res);
    }.bind(this));
  }

  componentDidUpdate(prevProps) {
    console.log("componentDidUpdate", this.props.activeMood, this.state.activeMood)
    if (this.props.activeMood !== prevProps.activeMood) {
      console.log("componentDidUpdateWithinIf", this.props.activeMood, this.state.activeMood)
      this.setState({
        isLoading: true,
      });
      getMessagesWithEmoijtag(this.props.activeMood, function(res) {
        this.updateMessages(res);
      }.bind(this));
    }
  }

  getAllPosts() {
    console.log("getAllPosts")
    this.setState({
      isLoading: true,
    });
    getMessages(function(res) {
      this.updateMessages(res);
    }.bind(this));

  }

  updateMessages(posts) {
    console.log("updateMessages", posts)
    this.setState({
      data: posts,
      isLoading: false,
      activeMood: this.props.activeMood,
    });
  }
  fakeUpdateMessages(posts) {
    console.log("updateMessages", posts)
  }

  render() {
    console.log("render")
    const {
      handleVote
    } = this.props;

    let messages = this.state.data
    .map(function (post) {
      return (<Post data={post} key={post.Id} handleVote={handleVote} />);
    });

    return (
      <div>
        <Valikko 
          changeMood={this.props.changeMood} 
          deactivateUser={this.props.deactivateUser} 
          getAllPosts={this.getAllPosts}
        />
        {this.state.isLoading && <Spinner />}
        {!this.state.isLoading &&
          <div className="card-columns">
          <div id="postList">
            {messages}
            <Message
              activeUser={this.state.activeUser}
              activeMood={this.props.activeMood}
              updateMessages={this.updateMessages}
              data={this.state.data}
            />
          </div>
        </div>}
      </div>
    )
  }
}

export default PostList;
