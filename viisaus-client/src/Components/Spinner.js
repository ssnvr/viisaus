import React, { Component } from 'react';
import './Spinner.css'

class Spinner extends Component {
  render() {
    return(
      <div id="spinner">
        <span role="img" aria-label="Thinking Face">🤔</span>
      </div>
    )
  }
}

export default Spinner;