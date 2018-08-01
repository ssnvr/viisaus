import React, {Component} from 'react';
// import './App.css';
import './Vote.css'

class Vote extends Component {
  state = {
    upvote: false,
    downvote: false,
  };

  upVote = (e) => {
    this.props.handleVote(e);
    this.setState({upvote: !this.state.upvote});
  }

  downVote = (e) => {
    this.props.handleVote(e);
    this.setState({downvote: !this.state.downvote});
  }

  render() {
    var up = this.state.upvote ? 'Hell yeah!' : 'Upvote';
    var down = this.state.downvote ? 'Hell no!' : 'Downvote';
    var uptyyli = this.state.downvote ? 'hidden':'visible';
    var downtyyli = this.state.upvote ? 'hidden':'visible';

    return(
      <div className="votebutton">
        <input type="button"
          value={up}
          data-votedirection="up"
          onClick={this.upVote}
          className={uptyyli}
          disabled={this.state.upvote} />
        <input type="button"
          value={down}
          data-votedirection="down"
          onClick={this.downVote}
          className={downtyyli}
          disabled={this.state.downvote}/>
      </div>
    )
  }
}
export default Vote;
