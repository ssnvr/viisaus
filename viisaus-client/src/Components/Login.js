import React, { Component } from 'react';


class Login extends Component{
    state={nickname:'', password:''}
    nicknameChanged = (e) => {
        this.setState({nickname: e.target.value});
    }
    passwordChanged = (e) => {
        this.setState({password: e.target.value})
    }
    //Tähän joku metodi millä katsellaan löytyykö databasesta annettuja tietoja.
    ready = (e) => {
        e.preventDefault();
        this.props.foundInDatabase(this.state);
        this.setState({nickname: '', password: ''});
    }

    render(){

        return(
           
            <div>
            <form onSubmit={this.ready}>
            Käyttäjätunnus: <input value={this.state.nickname} onChange={this.nicknameChanged}/> <br/>
            Salasana: <input value={this.state.password} onChange={this.passwordChanged}/> 
            <input type="submit"/>
            </form>           
            
            </div>
        );
        
    }
}
export default Login;