import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import {getUsers, addNewUser} from '../ServiceDesk';
import './Create.css';

class Create extends Component {

  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();
    this.state = {
      name: '',
      password: '',
    };
  }

  nameChanged = (e) => this.setState({ name: e.target.value });

  passwordChanged = (e) => this.setState({ password: e.target.value })

  checkLength = () => {
    let pituus = this.state.password.length;
    if (pituus < 6) {
      console.log(this.state.Message);
    }
  }

  addUser = (state) => {
    addNewUser(state, function (){
      this.props.backToLogin();
    }.bind(this));
  }

  CreateUser = (e) => {
    e.preventDefault();
    this.checkLength();
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
          Nickname: <input className="teksti" value={this.state.name} onChange={this.nameChanged} /> <br />
          Password: <input className="teksti" value={this.state.password} onChange={this.passwordChanged} />
          {this.validator.message('password',this.state.password,'required|min:6|max:30', 'text-danger')}

          <input className="nappi2" type="submit" onClick={this.handleClick}/>
        </form>
      </div>
    );
  }
}

export default Create;
