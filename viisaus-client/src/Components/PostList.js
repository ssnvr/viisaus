import React, { Component } from 'react';
import Post from './Post';
import Message from './Message';
import '../App.css';

class PostList extends Component {

    state = {
        data: [],
        activeMood: this.props.activeMood
    }
    constructor(props){
        super(props)
        this.updateMessages=this.updateMessages.bind(this)
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
    updateMessages(messages){
        this.setState({
            data: messages
        })
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
            <div className="card-columns">
            <div className="postList">
                {messages}
                <Message data={this.state.data} activeMood={this.state.activeMood} updateMessages={this.updateMessages} />
            </div>
            </div>
        )
    }
}
export default PostList;
