import React, { Component } from 'react';
import './Login.css'
import { getUsers } from '../ServiceDesk';

class Login extends Component {
    state = { name: '', password: '', udata: [] }
//Stateen vielä puuttuu että onko logattu sisään vai ei
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
        getUsers(function (user) {
            this.setState({ udata: user });
            this.find();
        }.bind(this));
    }
    find = () => {
        var things = this.state.udata;
        things.forEach(element => {
            if (element === this.state.name) {
                things.forEach(a => {
                    if (a === this.state.password) {
                        console.log("Oikeesti");
                    }
                });
        }
        });
    }
    handleClick = (e) => {
        this.props.changeRegistered()
    }

    ready = (e) => {
        e.preventDefault();
        this.foundInDatabase();
        this.setState({ name: '', password: '' });
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