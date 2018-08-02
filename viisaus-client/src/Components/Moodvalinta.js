import React, { Component } from 'react';
import './Moodvalinta.css';

class Moodvalinta extends Component {

render () {
    return (
        <div><p className="moodi">What's your mood?</p>
        <div className="boxi">
        <a className="emojit" onClick={() => this.props.changeMood('heart')}><span role="img">😍</span></a>
        <a className="emojit" onClick={() => this.props.changeMood('hands')}><span role="img">🙌</span></a>
        <a className="emojit" onClick={() => this.props.changeMood('wow')}><span role="img">🤯</span></a>
        <a className="emojit" onClick={() => this.props.changeMood('poop')}><span role="img">💩</span></a>
        <a className="emojit" onClick={() => this.props.changeMood('sunclasses')}><span role="img">😎</span></a>
        <a className="emojit" onClick={() => this.props.changeMood('beer')}><span role="img">🍻</span></a>
        <a className="emojit" onClick={() => this.props.changeMood('xd')}><span role="img">🤣</span></a>
        <a className="emojit" onClick={() => this.props.changeMood('unicorn')}><span role="img">🦄</span></a></div></div>

    )
}
}
export default Moodvalinta;