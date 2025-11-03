import './style.css'
import Logo from'../../assets/logo.png'
import{Link, NavLink}from 'react-router-dom'
export default function Header(){

    return(
        <header className='header'>
            <div className='header_'>
                <Link to= '/'>
                <img src={Logo} alt="logo de Contabilidade" />
                </Link>
            </div>
            <nav className='nav'>
                <NavLink to='/sobre-nos'> Sobre nós </NavLink>
                <NavLink to='/fale_conosco'>contato</NavLink>

            </nav>
        </header>
    )
}