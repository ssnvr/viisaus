import React, { Component } from 'react';
import Vote from './Vote';

class Post extends Component{
    state={counter: '' }


    //emojiasia

    render(){
        const{
            nickname,
            posttext

        } = this.props;

        return(
            <div>
                <p>{nickname}</p>
                <p>{posttext}</p>
                <Vote/>
                <p>Tykkäykset: {this.state.counter}</p>
                </div>
        );

    }
}
export default Post;
