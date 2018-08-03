import React, { Component } from 'react';
import Login from './Login';
import Create from './Create';
import './LandingPage.css';

class LandingPage extends Component {
    state = { registered: true }

    changeRegistered = () => {
        this.setState({
            registered: false,
        })
    }

    backToLogin = () => {
        this.setState({
            registered: true,
        })
    }

    render = () => {
        return (
            <div className="landing">
                {!this.state.registered &&
                    <div className="divi" onClick={this.backToLogin}>
                        <p className="backbutton" > 👈</p>
                        <p className="backbutton2" >BACK</p>
                    </div>}
                <h1 className="paaotsikko">Visdom</h1>
                {this.state.registered &&
                    <Login
                        changeRegistered={this.changeRegistered}
                        activateUser={this.props.activateUser}
                        isLoading={this.props.isLoading}
                    />}
                {!this.state.registered && <Create backToLogin={this.backToLogin} />}
            </div>);
    }
}

export default LandingPage;
