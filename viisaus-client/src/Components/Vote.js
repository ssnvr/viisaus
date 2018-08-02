import React, {Component} from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
// import './App.css';
import './Vote.css'

class Vote extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);

    const { 
      cookies, 
      postId 
    } = this.props

    this.state = {
      upvote: false,
      downvote: false,
      voted: cookies.get('postid' + postId) || null,
    };
  }
  

  upVote = (e) => {
    this.props.handleVoteUp(e);

    const { 
      cookies, 
      postId 
    } = this.props

    cookies.set('postid' + postId, e.currentTarget.dataset.votedirection, { path: '/' });
    this.setState({upvote: !this.state.upvote});
  }

  downVote = (e) => {
    this.props.handleVoteDown(e);

    const { 
      cookies, 
      postId 
    } = this.props

    cookies.set('postid' + postId, e.currentTarget.dataset.votedirection, { path: '/' });
    this.setState({downvote: !this.state.downvote});
  }

  render() {
    const { 
      voted,
      upvote,
      downvote,
    } = this.state

    let up, down, uptyyli, downtyyli;

    if (voted === 'up') {
      up = 'Hell yeah!';
      down = '👎';
      uptyyli = 'visible';
      downtyyli = 'hidden';
    } else if (voted === 'down') {
      up = '👍';
      down = 'Hell no!';
      uptyyli = 'hidden';
      downtyyli = 'visible';
    } else {
      up = upvote ? 'Hell yeah!' : '👍';
      down = downvote ? 'Hell no!' : '👎';
      uptyyli = downvote ? 'hidden':'visible';
      downtyyli = upvote ? 'hidden':'visible';
    }

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
export default withCookies(Vote);
