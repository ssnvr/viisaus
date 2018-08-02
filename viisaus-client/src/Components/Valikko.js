import React, { Component } from 'react';
// import './App.css';
import './Valikko.css';

class Valikko extends Component {
  constructor(props) {
    super(props)
    this.state={
      activeMood: this.props.activeMood,
      activeUser: this.props.activeUser,
      isHidden: true
    }
    this.logout=this.logout.bind(this)
  }
  showHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  logout(e){
    this.props.deactivateUser(e);
  }
 
  render() {
    return (
      <div className="valikko" >
        <a className="V" onClick={this.showHidden.bind(this)}>V</a>
        {!this.state.isHidden &&
          <div className="valikkopala">
            <ul className="emojilist">
              <li className="nav-item active">
                <a className="emoji" onClick={this.props.getAllPosts}>All<span className="sr-only"></span></a>
              </li>
              <li className="nav-item">
                <a className="emoji" onClick={() => this.props.changeMood('😍')} >
                  <span role="img" aria-label="Smiling Face With Heart-Eyes">😍</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="emoji" onClick={() => this.props.changeMood('🙌')}>
                  <span role="img" aria-label="Person Raising Both Hands in Celebration">🙌</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="emoji" onClick={() => this.props.changeMood('🤯')}>
                  <span role="img" aria-label="Shocked Face With Exploding Head">🤯</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="emoji" onClick={() => this.props.changeMood('💩')}>
                  <span role="img" aria-label="Pile of poo">💩</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="emoji" onClick={() => this.props.changeMood('😎')}>
                  <span role="img" aria-label="Smiling Face With Sunglasses">😎</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="emoji" onClick={() => this.props.changeMood('🍻')}>
                  <span role="img" aria-label="Clinking Beer Mugs">🍻</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="emoji" onClick={() => this.props.changeMood('🤣')}>
                  <span role="img" aria-label="Rolling on the Floor Laughing">🤣</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="emoji" onClick={() => this.props.changeMood('🦄')}>
                  <span role="img" aria-label="Unicorn Face">🦄</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="emoji" onClick={this.logout} >
                  <span role="img" aria-label="Cross Mark">❌</span>
                </a>
              </li>
            </ul>
          </div>
        }
      </div>
    )
  }
}


export default Valikko;