import React, { Component } from 'react';
import Vote from './Vote';

class Post extends Component{
  state={counter: '' }



  render(){
    const{
      message,
      handleVote
    } = this.props;
    
    return(
      <div>
        <p>{message}</p>
        <Vote handleVote={handleVote}/>
        <p>Tykkäykset: {this.state.counter}</p>
        
      </div>
    );    
  }
}
export default Post;
