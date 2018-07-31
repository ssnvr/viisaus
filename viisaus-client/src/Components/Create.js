import React, { Component } from 'react';

class Create extends Component {
    state={nickname:'', password:''}

    CreateUser = () => {
        
    }

    render() {
        return (
            <div>
                <h5>
                    Täydennä alle:
                </h5>

                <form onSubmit={this.CreateUser}>
                    Käyttäjätunnus: <input value={this.state.nickname} onChange={this.nicknameChanged} /> <br />
                    Salasana: <input value={this.state.password} onChange={this.passwordChanged} />
                    <input type="submit" />
                </form>




            </div>

        );
    }
}
export default Create;