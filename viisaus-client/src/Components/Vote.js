import React, {Component} from 'react';
import '../App.css';

class Vote extends Component{
    state = { upvote: false, downvote: false};
    upVote=()=>{
        this.setState({upvote: !this.state.upvote});
    }
    downVote=()=>{
        this.setState({downvote: !this.state.downvote});
    }
    render(){
        var up = this.state.upvote ? 'Hell yeah!' : 'Upvote';
        var down = this.state.downvote ? 'Hell no!' : 'Downvote';
        var uptyyli = this.state.downvote ? 'hidden':'';
        var downtyyli = this.state.upvote ? 'hidden':'';
        return(
            <div className="votebutton">
            <input type="button" value={up} onClick={this.upVote} className={uptyyli} disabled={this.state.upvote} />
            <input type="button" value={down} onClick={this.downVote} className={downtyyli} disabled={this.state.downvote}/>
            </div>
        )
    }
}
export default Vote;