import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './itemDetail.css';
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import Button from 'react-bootstrap/Button';


function ItemDetail({ terrarios }) {
    /*Crear un estado para guardar el valor del "count" del <ItemoCount>*/
    //const [handleEstado, setHandleEstado] = useState (false)

    /*
    function handleAddToCart(count) {
        alert(`agregaste al carrito ${count} unidades`)
        setHandleEstado (true)
    }
    */

    const [isInCart, setIsInCart] = useState(false)
    // el useState lo inicializo como  false porque cuando ese componente carga ese Detail todavia no lo agrgeue al carrito

    const [qty, setQty] = useState(1)
    const { addItem } = useContext(CartContext)

    const onAdd = () => {
        addItem(terrarios, qty)
        setIsInCart(true)
    }

    //Objetos de estilos: si el offer es true va de color verde, sino (osea false) de color blanco
    const styleDetailPrice = {
        color: terrarios.offer ? "#00FFAB" : "rgb(255, 255, 255)"
    }

    const styleItemDues = {
        color: terrarios.offer ? "#00FFAB" : "rgb(190, 190, 190)"
    }
    {/*aplicado al h5 price: style={styleItemPrice}*/ }



    //1) Usar un condicional ternario: pregunta una condicon, si es true ejecuta algo. Si es false ejecuta otra cosa.

    return (
        <div className='cardItem'>
            <div className='cardItemImg'>
                <img src={terrarios.img} className='cardItemImgTop' alt="cardItemImg" />
            </div>
            <div className='cardItemBody'>
                <div className='cardItemTitle'>
                    <h5 className='cardItemName'>{terrarios.name}</h5>
                    <h5 style={styleDetailPrice} className='cardItemPrice'>${terrarios.price}</h5>
                    <h5 style={styleItemDues} className='cardItemDues'>[ {terrarios.dues} cuotas sin interes de ${Math.round(terrarios.price / terrarios.dues)} ]</h5>
                </div>
                <div className='cardItemText'>
                    <li className='cardItemTextType'>Tipo: {terrarios.type}</li>
                    <li className='cardItemTextPlants'>Plantas: {terrarios.plants}</li>
                    <li className='cardItemTextPot'>Maceta: {terrarios.pot} {terrarios.potSize}</li>
                    <li className='cardItemTextDetail'>Detalle: {terrarios.detail}</li>
                </div>
                {
                    (isInCart) ?
                        <div className='btnGoToCartOrBack'>
                            <Link to={"/cart"}>
                                <Button className='btnGoToCart' variant="light">Iniciar Compra</Button>
                            </Link>
                            <Link className='btnGoToBack' to={"/"}>
                                <h5 className='goToBackTxt'>Seguir comprando</h5>
                            </Link>
                        </div>
                        : <ItemCount qty={qty} setQty={setQty} stock={terrarios.stock} onAdd={onAdd} />

                }
                <div className='cardItemText'>
                    <li className='cardItemTextStock'>{terrarios.stock === 0 && <span>(Producto sin Stock)</span>}</li>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail

/*
// la condicion es estadoCart === false 
// condicional ternario ? es igual a "entonces"
// condicional ternario : es igual a "sino"
// opc1: si el estadoCart es False, muestro mi contador porque le quiero dar al usuario la opcion de agregar items al carrito. Cuando el usuario haga click en onAddToCart, deberia modificar el estado dentro del handdleAddtoCart. Si el estadoCart es False ejecuta...<Button>Finalizar Compra</Button>
// opc2: si el estadoCart es True ejecuta...<ItemCount inital={1} stock={stock} onAddToCart={handleAddToCart} />});   
// en este caso la condicion True es que el estadocart sea false, en ese caso se ejecuta la opc1 
// El Button Finalizar compra nos tiene que llevar a un componente nuevo

//Inicializa como Flase porque veo el contador...en el momento que el estadoCart cambia a True deberia aarecer Finalizar Compra (en formato de Ruta que nos tiene que llevar a  un componente nuevo llamado Card)
*/