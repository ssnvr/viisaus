import React, { Component } from 'react';
// import './App.css';
import './Valikko.css';

class Valikko extends Component {
  constructor(props) {
    super(props)
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
      <div className="valikko" >
        <a className="V" onClick={this.showHidden.bind(this)}>V</a>
        {!this.state.isHidden &&
          <div className="valikkopala">
            <ul className="emojilist">
              <li className="nav-item">
                <a className="emoji" onClick={() => this.props.changeMood('😍')} ><span role="img">😍</span></a>
              </li>
              <li className="nav-item">
                <a className="emoji" onClick={() => this.props.changeMood('🙌')}><span role="img">🙌</span></a>
              </li>
              <li className="nav-item">
                <a className="emoji" onClick={() => this.props.changeMood('🤯')}><span role="img">🤯</span></a>
              </li>
              <li className="nav-item">
                <a className="emoji" onClick={() => this.props.changeMood('💩')}><span role="img">💩</span></a>
              </li>
              <li className="nav-item">
                <a className="emoji" onClick={() => this.props.changeMood('😎')}><span role="img">😎</span></a>
              </li>
              <li className="nav-item">
                <a className="emoji" onClick={() => this.props.changeMood('🍻')}><span role="img">🍻</span></a>
              </li>
              <li className="nav-item">
                <a className="emoji" onClick={() => this.props.changeMood('🤣')}><span role="img">🤣</span></a>
              </li>
              <li className="nav-item">
                <a className="emoji" onClick={() => this.props.changeMood('🦄')}><span role="img">🦄</span></a>
              </li>
              <li className="nav-item active">
                <a className="emoji">All<span className="sr-only"></span></a>
              </li>
            </ul>
          </div>
        }
      </div>
    )
  }
}

export default Valikko;
