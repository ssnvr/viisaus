import React, { Component } from 'react';
// import './App.css';
import './Valikko.css';

class Valikko extends Component {
  constructor() {
    super()
  this.state={
    activeMood: null,
    isHidden: true
  }
}
   showHidden() {
     this.setState({
       isHidden: !this.state.isHidden
     })
   }
  render() {
    return (
      <div className="valikko" ><a className="V" onClick={this.showHidden.bind(this)}>V</a>
      {!this.state.isHidden && <Icons/>}</div>
    )
  }
  }

  const Icons = () => (
      <div className="valikkopala">
      {/* // <nav className="valikko"> */}
          <ul className="emojilist">

            <li className="nav-item">
              <a className="emoji" onClick={() => this.props.changeMood('heart')} ><span role="img">😍</span></a>
            </li>
            <li className="nav-item">
              <a className="emoji" onClick={() => this.props.changeMood('hands')}><span role="img">🙌</span></a>
            </li>
            <li className="nav-item">
              <a className="emoji" onClick={() => this.props.changeMood('wow')}><span role="img">🤯</span></a>
            </li>
            <li className="nav-item">
              <a className="emoji" onClick={() => this.props.changeMood('poop')}><span role="img">💩</span></a>
            </li>
            <li className="nav-item">
              <a className="emoji" onClick={() => this.props.changeMood('sunclasses')}><span role="img">😎</span></a> 
            </li>
            <li className="nav-item">
              <a className="emoji" onClick={() => this.props.changeMood('beer')}><span role="img">🍻</span></a>
            </li>
            <li className="nav-item">
              <a className="emoji" onClick={() => this.props.changeMood('xd')}><span role="img">🤣</span></a>
            </li>
            <li className="nav-item">

              <a className="emoji" onClick={() => this.props.changeMood('unicorn')}><span role="img">🦄</span></a>

            </li>
            <li className="nav-item active">
              <a className="emoji">All<span className="sr-only"></span></a>
              
            </li>
          </ul>
        </div>
  )
      {/* </nav> */}
      // </div>
   
  
export default Valikko;
