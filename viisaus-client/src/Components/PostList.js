import React, { Component } from 'react';
import Post from './Post';
import '../App.css';

class PostList extends Component {
    state = { length: 0 };
    howLong = () =>{
        this.setState({length: event.target.value.length});
    }
        render() {
    var messages = this.props.data
        .map(function (post) {
            return (<Post message={post.Message} key={post.Id} />);
        });
    return (
        <div className="postList">
            {messages}
        </div>
    )
}
}
export default PostList;