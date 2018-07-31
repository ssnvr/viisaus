import React, { Component } from 'react';
import Post from './Post';
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
      </div>
    )
  }
}
export default PostList;
