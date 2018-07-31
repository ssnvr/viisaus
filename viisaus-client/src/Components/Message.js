import React, { Component } from 'react';

class Message extends Component {
    state = { Message: '' };

    messageCreated = (e) => {
        this.setState({ Message: e.target.value });
    }
    checkLength() {
        let pituus = this.state.Message.length;
        if (pituus > 160) {
            this.state.Message.trim('a', 'e', 'i', 'o', 'u', 'y', 'å', 'ä', 'ö');
            console.log(this.state.Message);

        }
    }
    sendMessage = (e) => {
        e.preventDefault();
        this.checkLength();
        this.props.writeMessage(this.state);
        this.setState({ Message: '' });
    }
    render() {

        return (
            <div className="message">
                <textarea placeholder="Write your message here!" value={this.state.Message} onChange={this.messageCreated} />
                <input className="submitMessage" type="submit" value="Send message" onClick={this.sendMessage} />
            </div>
        )
    }

}

export default Message;