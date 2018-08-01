import React, { Component } from 'react';
import Vote from './Vote';

class Post extends Component{
  state={counter: '' }

//   emoji = () => {
//     switch(mood){
//       case 'heart':
//       <p>😍</p>
//     }
//   }

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
        {/* <div>{this.emoji()}</div> */}
      </div>
    );
    
  }
}
export default Post;
