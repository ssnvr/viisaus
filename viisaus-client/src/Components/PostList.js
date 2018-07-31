import React, { Component } from 'react';
import Post from './Post';
import Message from './Message';
import '../App.css';

class PostList extends Component {
    render() {
        var messages = this.props.data
            .map(function (post) {
                return (<Post message={post.Message} key={post.Id} />);
            });
        return (
            <div className="postList">
                {messages}
                <Message writeMessage={this.addMessage}/>
            </div>
        )
    }
}
export default PostList;