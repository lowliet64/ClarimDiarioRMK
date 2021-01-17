import { React, Component } from 'react'
import './styles/header.css'
import Logo from "../assets/img/signo-transparente.png";
import { Link } from 'react-router-dom'
class Header extends Component {
    render() {
        return (
            <header className="header-box">
                <a href="/"> <img className="logo-header-image" src={Logo} alt="" /></a>
                <form className="search-box" method="GET">
                    <input className="search-input" type="text" />
                    <button className="search-button" type="submit"><img src="https://images.vexels.com/media/users/3/140723/isolated/preview/158241d2079a635fb0cae49accb56da5-iacute-cone-de-lupa-by-vexels.png" alt="" className="search-image" /></button>
                </form>
                <div className="actions-box">
                    <a href="/register"><button className="custom-button login-button">Registrar</button></a>
                    <a href="/login"><button className="custom-button register-button">Logar</button></a>
                </div>
            </header>
        )
    }

}

export default Header;
