import React, { Component } from 'react';
import './Moodvalinta.css';

class Moodvalinta extends Component {

render () {
    return (
        <div>
            <p className="moodi">What's your mood?</p>
            <div className="boxi">
                <a className="emojit" onClick={() => this.props.changeMood('😍')}>
                    <span role="img" aria-label="Smiling Face With Heart-Eyes">😍</span>
                </a>
                <a className="emojit" onClick={() => this.props.changeMood('🙌')}>
                    <span role="img" aria-label="Person Raising Both Hands in Celebration">🙌</span>
                </a>
                <a className="emojit" onClick={() => this.props.changeMood('🤯')}>
                    <span role="img" aria-label="Shocked Face With Exploding Head">🤯</span>
                </a>
                <a className="emojit" onClick={() => this.props.changeMood('💩')}>
                    <span role="img" aria-label="Pile of poo">💩</span>
                </a><br/>
                <a className="emojit" onClick={() => this.props.changeMood('😎')}>
                    <span role="img" aria-label="Smiling Face With Sunglasses">😎</span>
                </a>
                <a className="emojit" onClick={() => this.props.changeMood('🍻')}>
                    <span role="img" aria-label="Clinking Beer Mugs">🍻</span>
                </a>
                <a className="emojit" onClick={() => this.props.changeMood('🤣')}>
                    <span role="img" aria-label="Rolling on the Floor Laughing">🤣</span>
                </a>
                <a className="emojit" onClick={() => this.props.changeMood('🦄')}>
                    <span role="img" aria-label="Unicorn Face">🦄</span>
                </a>
            </div>
        </div>

    )
}
}
export default Moodvalinta;