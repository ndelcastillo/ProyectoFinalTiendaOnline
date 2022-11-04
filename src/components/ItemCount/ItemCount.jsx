import React from 'react'
import "./itemCount.css";


export default function ItemCount({ qty, setQty, onAdd, stock }) {
    const handleMinus = () => {
        if (qty > 1) {
            setQty(qty - 1);
        }
    };

    const handlePlus = () => {
        if (qty < stock) {
            setQty(qty + 1);
        }
    };

    return (
        <div className='itemCount'>
            <div className='itemCountAll'>
                <button onClick={handleMinus} type="button" className="btn btn-outline-light btnMenos">-</button>
                <h1 className='numCount'>{qty}</h1>
                <button onClick={handlePlus} type="button" className="btn btn-outline-light btnMas">+</button>
            </div>
            <button type="button" className='btn btn-light btnAgregarAlCarrito' onClick={() => { onAdd() }}>Agregar al Carrito</button>
        </div>
    )
}

