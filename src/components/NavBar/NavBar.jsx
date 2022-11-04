import React, { useState } from 'react';
import "./navBar.css";
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <div className="navBar">
            <header className="navBarHeader">
                <ul className="navBarUl1">
                    <li className="navItem">
                        <Link className="navLink" to="/categoria/cilindro">Cilindro</Link>
                    </li>
                    <li className="navItem">
                        <Link className="navLink" to="/categoria/pecera">Pecera</Link>
                    </li>
                    <li className="navItem">
                        <Link className="navLink" to="/cuidados">Cuidados</Link>
                    </li>
                </ul>
                <Logo />
                <ul className="navBarUl3">
                    <li className="navItem"><Link className="navLink" to="/contacto">Contacto</Link></li>
                    <li className="navItemUsuario"><Link className="navLink" to="/usuario">Usuario</Link></li>
                    <CartWidget/>
                </ul>
            </header>
        </div>
    );
}

export function Logo() {
    return <ul className="navBarUl2">
        <li className="navItem"><Link className="navLink" to="/"><img src="/assets/images/logo/logoFilotaxiaFinal.png" className="navBarUl2Img" /></Link></li>
    </ul>
}

export default NavBar;