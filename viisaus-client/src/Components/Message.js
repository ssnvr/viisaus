import React, {Component} from 'react';

class Message extends Component{
    handleChange (e){
        this.setState({
            length: event.target.value.length
        });
    }
    render(){
      
        return(
            <div className="message">
            <textarea onChange={this.handleChange}/>
            <input className="submitMessage" type="submit" value="Send message" onClick={}/>
            </div>
        )
    }

}

export default Message;