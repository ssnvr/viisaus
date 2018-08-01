import React, { Component } from 'react';
import Login from './Login';
import Create from './Create';
import './LandingPage.css';

class LandingPage extends Component {
    state = { registered: true }

    changeRegistered = () => {
        this.setState({
            registered:false,
        })
    }
    render() {
        return (
            <div className="landing">
                <h1 className="paaotsikko">Visdom</h1>
                {this.state.registered && <Login changeRegistered={this.changeRegistered}/>}
                {!this.state.registered && <Create />}
            </div>);
    }
}
export default LandingPage;
