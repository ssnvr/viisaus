import React, { Component } from 'react';
import {getUsers, addNewUser} from '../ServiceDesk';
import './Create.css';

class Create extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
    };
  }

  nameChanged = (e) => this.setState({ name: e.target.value });

  passwordChanged = (e) => this.setState({ password: e.target.value })

  addUser = (state) => {
    addNewUser(state, function (){
      this.props.backToLogin();
    }.bind(this));
  }

  CreateUser = (e) => {
    e.preventDefault();
    this.addUser(this.state);
    this.setState({ name: '', password: '' });
  }

  render() {
    return (
      <div className="create">
        <h5>
          Create account:
        </h5>

        <form onSubmit={this.CreateUser}>
          Nickname: <input className="teksti" value={this.state.name} onChange={this.nameChanged} minLength="3" maxLength="50"/>  <br />
          Password: <input className="teksti" type="password" value={this.state.password} onChange={this.passwordChanged} minLength="6" maxLength="50"/>
        
          <input className="nappi2" type="submit" onClick={this.handleClick}/>
        </form>
      </div>
    );
  }
}

export default Create;
