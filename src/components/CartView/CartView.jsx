import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import './cartView.css'
import Button from 'react-bootstrap/Button';


const CartView = () => {
  const context = useContext(CartContext);
  const { cart, emptyCart, deleteCart, getItemQty, getItemPrice } = context

  let carritovacio = cart.length === 0;

  if (carritovacio) {
    return <div>
      <h1 className='cartViewTitleVacio'>Tu carrito esta vacio...
        <Link className='cartViewTitleVacio' to={"/"}>Seguir Comprando</Link>
      </h1>
    </div>;
  }

  return (
    <div className='mainContainerCartView'>
      <h1 className='cartViewTitle'>Mi carrito</h1>
      <table className="cartViewTable">
        <thead className="cartViewTableHead">
          <tr className="cartViewTableRow">
            <th>Imagen</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody className="cartViewTableBody">
          {cart.map((item) => {
            return (
              <tr key={item.id} className="cartViewTableBodyInfo">
                <td className='cartViewTableBodyInfoImg'>
                  <img src={item.img} alt={item.title} />
                </td>
                <td className='cartViewTableBodyInfoName'>{item.name}</td>
                <td className='cartViewTableBodyInfoPrice'>$ {item.price}</td>
                <td className='cartViewTableBodyInfoQty'>{item.qty}</td>
                <th className='cartViewTableBodyInfoSubtotal'>$ {item.price * item.qty}</th>
                <td>
                  <FontAwesomeIcon icon={faTrash} onClick={() => deleteCart(item.id)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h3 className='cartViewTotalPrice'>El total de tu compra es de ${getItemPrice()}</h3>
      <Link to={"/checkoutform"}>
        <Button className='cartViewBtn' variant="dark"> <h1 className='cartViewBtnContinuar'>Continuar Compra</h1></Button>
      </Link>
    </div>
  );
}

export default CartView



