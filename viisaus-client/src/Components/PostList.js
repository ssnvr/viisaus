import React, { Component } from 'react';
import Post from './Post';
import Message from './Message';
import '../App.css';

class PostList extends Component {

  render() {
    const {
      data,
      handleVote
    } = this.props;

    let messages = data.map(function (post) {
      return (<Post message={post.Message} key={post.Id} handleVote={handleVote}/>);
    });
    
    return (
      <div className="postList">
        {messages}
        <Message data={this.data}/>
      </div>
    )
  }
}
export default PostList;

