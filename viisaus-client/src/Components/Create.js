import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';

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
    handleClick = (e) => {
        e.preventDefault();
        if(this.state.password.length < 6){
            console.log('Liian lyhyt salasana');
        }
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


