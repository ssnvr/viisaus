import React, { Component } from 'react';
import { getMessages, addNewMessage } from '../ServiceDesk';
import './Message.css';

class Message extends Component {

    state = { data: [],
        Message: '',
    activeMood: this.activeMood };

    messageCreated = (e) => {
        this.setState({ Message: e.target.value });
    }

    checkLength() {
        let pituus = this.state.Message.length;
        if (pituus > 160) {

            this.state.Message.trim('a', 'e', 'i', 'o', 'u', 'y', 'å', 'ä', 'ö');
            console.log(this.state.Message);

            this.setState({ Message: this.state.Message.replace(/[aeiouyåäö]/gi, '') });


        }
    }
    componentDidMount(){
        this.getMessagesAndUpdate();
    }
    getMessagesAndUpdate = () => {
        getMessages(function (list) {
            this.props.updateMessages(list)
        }.bind(this));
        console.log("mitä");
    } //tämäkin on joku Annin hämärä funktio

    addMessage = (msg) => {
        addNewMessage(msg, function () {
            this.getMessagesAndUpdate();
        }.bind(this));
    }
    sendMessage = (e) => {
        e.preventDefault();
        this.checkLength();
        this.addMessage(this.state); //tässä on iso onglema 
        this.setState({ Message: '' });
    }
    render() {
        console.log(this.state);
        return (
            <div className="message">
                <textarea className="tekstibox" rows="1" cols="35" placeholder="Write your message here!" value={this.state.Message} onChange={this.messageCreated} /><br/>
                <input className="submitMessage" type="submit" value="Send message" onClick={this.sendMessage} />
            </div>
        )
    }
}
export default Message;