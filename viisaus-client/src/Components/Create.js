import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import {getUsers, addNewUser} from '../ServiceDesk';

class Create extends Component {

    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
    }

    state = { nickname: '', password: '' }
    nicknameChanged = (e) => {

        this.setState({ nickname: e.target.value });
    }
    passwordChanged = (e) => {
        this.setState({ password: e.target.value })

    }
    checkLength() {
        let pituus = this.state.password.length;
        if (pituus < 6) {
            console.log(this.state.Message);
        }
    }
    getUserAndUpdate=()=>{
        getUsers(function (user){
          this.setState({udata: user});
        }.bind(this));
      } //tämäkin on joku Annin hämärä funktio
       
      addUser= (msg)=>{
        addNewUser(msg, function (){
          this.getUserAndUpdate();
        }.bind(this));
      }
    CreateUser = (e) => {
        e.preventDefault();
        this.checkLength();       
        this.addUser(this.state); //tässä on iso onglema 
        this.setState({ nickname: '', password: '' });
    }
   
    


    render() {
        return (
            <div>
                <h5>
                    Create account:
                </h5>

                <form onSubmit={this.CreateUser}>
                    Nickname: <input value={this.state.nickname} onChange={this.nicknameChanged} /> <br />
                    Password: <input value={this.state.password} onChange={this.passwordChanged} />
                    {this.validator.message('password',this.state.password,'required|min:6|max:30', 'text-danger')}

                    <input type="submit" onClick={this.handleClick}/>
                </form>


            </div>

        );
    }

}
export default Create;


