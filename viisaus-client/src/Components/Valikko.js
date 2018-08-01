import React, { Component } from 'react';
// import './App.css';

class Valikko extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-sm">
        <a className="navbar-brand" href="#">Pick a mood</a>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">All<span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">😍 </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">🙌</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">🤯</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">💩</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">😎</a> 
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">🍻</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">🤣</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">🦄</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a> */}
            {/* </li> */}
          </ul>
        </div>
      </nav>
    )
  }
}

export default Valikko;