import React, { Component } from 'react';
import Post from './Post';
import Message from './Message';
import Valikko from './Valikko';
import '../App.css';
import './PostList.css'

class PostList extends Component {

    state = {
        data: [],

        activeMood: this.props.activeMood
    }
    constructor(props) {
        super(props)
        this.updateMessages = this.updateMessages.bind(this);

    }
    componentDidMount() {
        fetch("api/posts/")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    data: json,
                });
            });


    }

    updateMessages(messages) {
        this.setState({
            data: messages
        })
    }

    render() {
       
        let messages = this.state.data

            .map(function (post) {
                return (<Post data={post} key={post.Id} />);
            }.bind(this));
        return (
            <div>
                <Valikko changeMood={this.props.changeMood} />
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
