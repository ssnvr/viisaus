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

            <div className="container">
            {/* <div className="row">
            <div className="col-xs"></div>
            <div className="col-xs-6"> */}
                <h5 className="loggaus">Login</h5>
                <form onSubmit={this.ready}>
                    Nickname: <input className="teksti" value={this.state.name} onChange={this.nameChanged} /> <br />
                    Password: <input className="teksti" value={this.state.password} onChange={this.passwordChanged} />
                    <input className="nappi" type="submit" />
                </form>
                {/* </div>
                <div className="col-xs"></div>
                </div> */}
                <p className="luoUusi" onClick={this.handleClick}>Create new account</p>
            </div>
        );

    }
}
export default Login;