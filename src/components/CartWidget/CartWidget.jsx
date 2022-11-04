import React, { useContext } from 'react'
import "../NavBar/navBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

function CartWidget() {

    const {getItemQty} = useContext(CartContext)

    return (
        <li className="navItem">
            <Link className="navLink" to={"/cart"}><FontAwesomeIcon icon={faCartArrowDown} />{getItemQty() > 0 && getItemQty() }</Link>
        </li>
    )
}

export default CartWidget