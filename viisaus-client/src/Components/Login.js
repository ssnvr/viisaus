import React, { Component } from 'react';
import './Login.css'
import { getUsers , getUser} from '../ServiceDesk';

class Login extends Component {
    constructor(props) {
        super(props)
        this.handleClick=this.handleClick.bind(this)
        this.foundInDatabase=this.foundInDatabase.bind(this)
        this.state = {
          name: '',
          password: ''
        };
    }
    nameChanged = (e) => {
        this.setState({ name: e.target.value });
    }
    passwordChanged = (e) => {
        this.setState({ password: e.target.value })
    }
    foundInDatabase = () => {
        getUser(this.state.name, this.state.password, function (user) {
            this.props.activateUser(user)
        }.bind(this));
    }

    handleClick = (e) => {
        this.props.changeRegistered()
    }
    

    ready = (e) => {
        e.preventDefault();
        this.foundInDatabase();
        this.setState({ name: '', password: '' });
        console.dir(this.state.isLoading)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.ready}>
                     <input className="teksti" placeholder="Nickname" value={this.state.name} onChange={this.nameChanged} required/> <br />
                     <input className="teksti" placeholder="Password" type="password" value={this.state.password} onChange={this.passwordChanged} required/>
                    <input className="nappi" type="submit" value="Login"/>

                </form>
                <p className="luoUusi" onClick={this.handleClick}>Create new account</p>
            </div>
        );
    }
}

export default Login;
