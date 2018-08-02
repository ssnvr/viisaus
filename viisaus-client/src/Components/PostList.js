import React, { Component } from 'react';
import Post from './Post';
import Message from './Message';
import Valikko from './Valikko';
import '../App.css';
import { getMessagesWithEmoijtag } from '../ServiceDesk';
import './PostList.css';

class PostList extends Component {


  constructor(props){
    super(props);
    this.state = {
      data: [],
      activeMood: this.props.activeMood
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateMessages = this.updateMessages.bind(this);
  }

  componentDidMount(){
    console.log(this);
    getMessagesWithEmoijtag(this.state.activeMood, function(res) {
      this.updateMessages(res)
    }.bind(this));
  }

  updateMessages(posts) {
    this.setState({
      data: posts
    });
  }

  render() {
    const {
      handleVote
    } = this.props;

    let messages = this.state.data
    .map(function (post) {
      return (<Post data={post} key={post.Id} handleVote={handleVote} />);
    });
    return (
      <div>
        <Valikko changeMood={this.props.changeMood} deactivateUser={this.props.deactivateUser}/>
        <div className="card-columns">
          <div className="postList">
            {messages}
            <Message
              data={this.state.data}
              activeMood={this.props.activeMood}
              updateMessages={this.updateMessages}
              activeUser={this.props.activeUser}
              />
          </div>
        </div>
      </div>
    )
  }
}

export default PostList;
