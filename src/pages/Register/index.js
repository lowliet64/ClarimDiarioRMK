import { React, Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import './index.css'
class Register extends Component {

    render() {
        return (
            <div className="container">
                <Header />
                <form action="" className="container-form">
                    <h1>Cadastre-se</h1>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" className="form-input-field" name="username" />
                    <label htmlFor="username">Password</label>
                    <input id="password" type="password" className="form-input-field" name="password1" />
                    <label htmlFor="username">Confirmar Senha</label>
                    <input id="password" type="password" className="form-input-field" name="password2" />
                    <button className="submit-button" type="submit">Cadastrar</button>
                </form>
            </div>
        )

    }

}

export default Register;
