import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { createBuyOrder } from '../../services/firestore';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import './checkoutForm.css'
import FormInput from './FormInput';



function CheckoutForm() {
    const [dataForm, setDataForm] = useState({
        name: "",
        surname: "",
        phone: "",
        email: "",
        address: "",
        detail: "",
        zipcode: "",
        city: "",
        province: "",
    });

    const navigate = useNavigate();
    const context = useContext(CartContext)
    const { cart, emptyCart, deleteCart, getItemQty, getItemPrice } = context

    function handleCheckout(event) {
        event.preventDefault()
        const orderData = {
            date: new Date(),
            buyer: dataForm,
            items: cart,
            total: getItemPrice(),
        };
        createBuyOrder(orderData).then(orderid => {
            navigate(`/checkout/${orderid}`)
        })
    }

    function inputChangeHandler(event) {
        const { value, name } = event.target;
        const newDataForm = { ...dataForm };
        newDataForm[name] = value;
        setDataForm(newDataForm);
    }

    return (
        <div className="mainContainerCheckout">
            <h1 className='checkoutFormTitle1'>Datos de contacto</h1>
            <div className="mainContainerCheckoutFormAll">
                <Form className='checkoutForm' onSubmit={handleCheckout}>
                    <div className='checkoutFormName'>
                        <FormInput value={dataForm.name} name="name" inputChangeHandler={inputChangeHandler}>
                            Nombre
                        </FormInput>
                        <FormInput value={dataForm.surname} name="surname" inputChangeHandler={inputChangeHandler}>
                            Apellido
                        </FormInput>
                    </div>
                    <FormInput value={dataForm.phone} name="phone" inputChangeHandler={inputChangeHandler}>
                        Telefono
                    </FormInput>
                    <FormInput value={dataForm.email} name="email" inputChangeHandler={inputChangeHandler}>
                        Email
                    </FormInput>
                    <Form.Group className="text-muted" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Recibir ofertas y novedades de Filotaxia por email" />
                    </Form.Group>
                    <h1 className='checkoutFormTitle2'>Direccion de envío</h1>
                    <FormInput value={dataForm.address} name="address" inputChangeHandler={inputChangeHandler}>
                        Dirección
                    </FormInput>
                    <FormInput value={dataForm.detail} name="detail" inputChangeHandler={inputChangeHandler}>
                        Piso, lote, etc
                    </FormInput>
                    <FormInput value={dataForm.zipcode} name="zipcode" inputChangeHandler={inputChangeHandler}>
                        Código Postal
                    </FormInput>
                    <FormInput value={dataForm.city} name="city" inputChangeHandler={inputChangeHandler}>
                        Ciudad
                    </FormInput>
                    <FormInput value={dataForm.province} name="province" inputChangeHandler={inputChangeHandler}>
                        Provincia
                    </FormInput>
                    <div className='checkoutBtnBackAndSub'>
                        <Link className='checkoutBtnBackLink' to={"/cart"}>
                            <h5 className='checkoutBtnBack'> ← Volver al carrito</h5>
                        </Link>
                        <Button className='checkoutBtnSubmit' variant="dark" type="submit">
                            Continuar a pago
                        </Button>
                    </div>
                </Form>

                <div className="checkoutCartView">
                    <table className="checkoutCartViewTable">
                        <tbody className="checkoutCartViewTableBody">
                            {cart.map((item) => {
                                return (
                                    <tr key={item.id} className="checkoutCartViewTableBodyInfo">
                                        <td className='checkoutCartViewTableBodyInfoImg'>
                                            <img src={item.img} alt={item.title} />
                                        </td>
                                        <td className='checkoutCartViewTableBodyInfoName'>{item.name}</td>
                                        <td className='checkoutCartViewTableBodyInfoQty'>{item.qty} x</td>
                                        <td className='checkoutCartViewTableBodyInfoPrice'>$ {item.price}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <h3 className='checkoutCartViewTotal'>Total: ${getItemPrice()}</h3>
                </div>
            </div>
        </div>
    );
}

export default CheckoutForm

