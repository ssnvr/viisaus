import React, { Component } from 'react';
// import './App.css';
import './Valikko.css';

class Valikko extends Component {
  state={
    activeMood: null,
  }
   
  render() {
    return (
      <nav className="navbar navbar-expand-sm">
        <a className="navbar-brand" href="#">Visdom</a>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">All<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => this.props.changeMood('heart')} ><span role="img">😍</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => this.props.changeMood('hands')}><span role="img">🙌</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => this.props.changeMood('wow')}><span role="img">🤯</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => this.props.changeMood('poop')}><span role="img">💩</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => this.props.changeMood('sunclasses')}><span role="img">😎</span></a> 
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => this.props.changeMood('beer')}><span role="img">🍻</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => this.props.changeMood('xd')}><span role="img">🤣</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => this.props.changeMood('unicorn')}><span role="img">🦄</span></a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Valikko;