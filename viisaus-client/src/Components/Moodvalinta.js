import React, { Component } from 'react';
import './Moodvalinta.css';

class Moodvalinta extends Component {

render () {
    return (
        <div><p className="moodi">What's your mood?</p>
        <div className="boxi">
        <a className="emojit" onClick={() => this.props.changeMood('😍')}><span role="img">😍</span></a>
        <a className="emojit" onClick={() => this.props.changeMood('🙌')}><span role="img">🙌</span></a>
        <a className="emojit" onClick={() => this.props.changeMood('🤯')}><span role="img">🤯</span></a>
        <a className="emojit" onClick={() => this.props.changeMood('💩')}><span role="img">💩</span></a><br/>
        <a className="emojit" onClick={() => this.props.changeMood('😎')}><span role="img">😎</span></a>
        <a className="emojit" onClick={() => this.props.changeMood('🍻')}><span role="img">🍻</span></a>
        <a className="emojit" onClick={() => this.props.changeMood('🤣')}><span role="img">🤣</span></a>
        <a className="emojit" onClick={() => this.props.changeMood('🦄')}><span role="img">🦄</span></a></div></div>

    )
}
}
export default Moodvalinta;