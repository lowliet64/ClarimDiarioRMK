import { React, Component } from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'
import Header from '../../components/Header'
import './index.css'
class Login extends Component {
    constructor(props) {
        super(props)
    }
    loginSubmit = event => {

        event.preventDefault();
        //var form = new FormData(document.getElementById('login-form'))
        let username = document.getElementById('email')
        let password = document.getElementById('password')
        fetch('http://127.0.0.1:8000/login/',
            {
                headers: {
                    "Content-Type": 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    'username': username.value,
                    'password': password.value

                }),

            }).then(async (response) => {
                if (response.status == 200) {
                    const r = await response.json()
                    localStorage.setItem('Authorization', 'Token ' + r.token)

                }
            }).catch(e => {
                alert('nao foi possivel logar erro:' + e)
            })
        this.props.history.push('/article')
    }

    render() {
        return (
            <div className="container">
                <Header />
                <form action="" id="login-form" className="container-form" onSubmit={this.loginSubmit}>
                    <h1>Entrar</h1>
                    <label htmlFor="username">Username</label>
                    <input id="email" type="text" className="form-input-field" name="email" />
                    <label htmlFor="username">Password</label>
                    <input id="password" type="password" className="form-input-field" name="password" />
                    <button className="submit-button" type="submit">Entrar</button>
                </form>
            </div>
        )
    }

}

export default withRouter(Login);
