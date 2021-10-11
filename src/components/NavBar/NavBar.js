import React, {useState} from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import logo from "./logo.png";
import './navbar.css';


const NavBar = () => {
    
    const [links, setLinks] = useState([
        {nombre: 'Nosotros', url: '/nosotros'}, 
        {nombre: 'Especias', url: '/category/Especias'},
        {nombre: 'Congelados', url: '/category/Congelados'},
        {nombre: 'Legumbres', url: '/category/Legumbres'},
        {nombre: 'Dulces', url: '/category/Dulces'},
        {nombre: 'Otros', url: '/category/Otros'}
      ])
    
    return(
        <header >
            <nav className="navbar">
                <Link to='/' className="navbar-logo">
                <img src={logo} alt={"Manzanilla, tienda natural"}/>
                </Link>
                <ul className="nav-menu">
                    {links.map((link, i) => {
                    return (<li  key={i}><Link className="nav-link" to={link.url}>{link.nombre}</Link></li>)
                    })}
                    <CartWidget />
                </ul>
            </nav>
        </header>
    )
}
export default NavBar;

