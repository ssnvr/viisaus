import React, { Component } from 'react';
import Vote from './Vote';
import { putVote } from '../ServiceDesk'

class Post extends Component {

  constructor(props) {
    super(props)

    const {
      Message,
      Vote,
      Id
    } = this.props.data;

    this.state = {
      Message,
      Vote,
      Id
    }

    this.handleVote = this.handleVote.bind(this);
  }

  handleVote() {
    let post = this.props.data;
    post.Vote++
    putVote(post, function(res) {
      console.log(res);
      this.setState({
        Vote: this.state.Vote + 1
      })
    }.bind(this))
  }

  render() {
    // const {
    //   handleVote
    // } = this.props;

    return(
      <div>
        <p>{this.state.Message}</p>
        <Vote handleVote={this.handleVote}/>
        <p>Tykkäykset: {this.state.Vote}</p>
      </div>
    );
  }
}

export default Post;
