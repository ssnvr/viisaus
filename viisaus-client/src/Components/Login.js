import React, { Component } from 'react';
import './Login.css'
import { getUsers , getUser} from '../ServiceDesk';

class Login extends Component {
    state = { name: '', password: '', udata: [], activeUser: null }

    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    nameChanged = (e) => {
        this.setState({ name: e.target.value });
    }
    passwordChanged = (e) => {
        this.setState({ password: e.target.value })
    }
    foundInDatabase = () => {
        getUser(this.state.name, this.state.password, function (user) {
            this.setState({ udata: user });
            console.log("mahtia");
        }.bind(this));
    }
    
    handleClick = (e) => {
        this.props.changeRegistered()
    }

    ready = (e) => {
        e.preventDefault();
        this.foundInDatabase();
        this.setState({ name: '', password: '' , activeUser: true});
    }

    render() {

        return (

            <div>
                <h5>Login</h5>
                <form onSubmit={this.ready}>
                    Nickname: <input value={this.state.name} onChange={this.nameChanged} /> <br />
                    Password: <input value={this.state.password} onChange={this.passwordChanged} />
                    <input type="submit" />
                </form>

                <p onClick={this.handleClick}>Create new account</p>

            </div>
        );

    }
}
export default Login;