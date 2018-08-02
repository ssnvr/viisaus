import React, { Component } from 'react';
import Post from './Post';
import Message from './Message';
import '../App.css';

class PostList extends Component {

    state = {
        data: [],
        activeMood: this.activeMood
    }
    componentDidMount(){
        fetch("api/posts/")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    data: json,
                });
            });
    }

    render() {
        const {
            
            handleVote
        } = this.props;

        let messages = this.state.data
            .map(function (post) {
                return (<Post message={post.Message} key={post.Id} handleVote={handleVote} />);
            });

        return (
            <div className="postList">
                {messages}
                <Message data={this.data} />
            </div>
        )
    }
}
export default PostList;

