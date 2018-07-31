import React, { Component } from 'react';
import Post from './Post';
import '../App.css';

class PostList extends Component {

    render() {
        var viestit = this.props.viestit
            .map(function (posttext) {
                return (<Post posttext={posttext} key={posttext.id} />);
            }.bind(this));
        return (
            <div className="postList">
                {viestit}
            </div>
        )
    }
}
export default PostList;