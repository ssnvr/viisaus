import React, { Component } from 'react';
import Vote from './Vote';
import './Post.css'

class Post extends Component{
  state={counter: '' }



  render(){
    const{
      message,
      handleVote
    } = this.props;
    
    return(
      <div className="card text-right">
      <div className="card-body">
      <h5 className="card-title"> 😍 </h5> 
        <p className="card-text">Tämä on esimerkkiviesti blaablaablaa
        blaablaablaablaaa
        blaaaaab
        alalalalalal{message}</p>
        <Vote handleVote={handleVote}/>
        <p className="card-text" id="tykkaykset" >0 1 2 3 4 5 6 7 8 9{this.state.counter}</p> 
        </div>
      </div>
    );    
  }
}
export default Post;
<div class="card text-right" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>