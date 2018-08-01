import React, { Component } from 'react';
import Login from './Login';
import Create from './Create';

class LandingPage extends Component {
    state = { registered: true }

    changeRegistered = () => {
        this.setState({
            registered:false,
        })
    }
    render() {
        return (
            <React.Fragment>
                {this.state.registered && <Login changeRegistered={this.changeRegistered}/>}
                {!this.state.registered && <Create />}
            </React.Fragment>);
    }
}
export default LandingPage;
