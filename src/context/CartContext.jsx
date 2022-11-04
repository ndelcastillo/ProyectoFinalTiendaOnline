import React, { createContext, useState } from 'react';

//1) Creamos un context con createContext
export const CartContext = createContext();

//2) Definimos el Provider: provedora de informacion para toda nuestra App
const { Provider } = CartContext;

//3) Creo el componente de nuestro contexto que va a englobar a toda nuestra App, asi toda la App y sus componentes se nutren de la info que vamos a aplicar aca.
const MyProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // isInCart
    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }

    // addItem
    const addItem = (terrarios, qty) => {
        const newItem = { ...terrarios, qty }
        if (isInCart(newItem.id)) {
            const findProduct = cart.find(item => item.id === newItem.id)
            const productIndex = cart.indexOf(findProduct)
            const auxArray = [...cart];
            auxArray[productIndex].qty += qty;
            setCart(auxArray)
        } else {
            setCart([...cart, newItem])
        }
    }

    // emptyCart
    const emptyCart = () => {
        return setCart([])
    }

    // deleteCart
    const deleteCart = (id) => {
        return setCart(cart.filter((item) => item.id !== id))
    }

    // getItemQty
    const getItemQty = () => {
        return cart.reduce((acc, item) => (acc += item.qty), 0)
    }

    // getItemPrice
    const getItemPrice = () => {
        return cart.reduce((acc, item) => (acc += item.price * item.qty), 0)
    }

    return (
        //4) Pasamos el objeto Valiue a los componentes hijos
        <Provider value={{
            cart,
            isInCart,
            addItem,
            emptyCart,
            deleteCart,
            getItemQty,
            getItemPrice
        }}
        >
            {children}
        </Provider>
    )
}

export default MyProvider



//hacemos destructuring de {children}

//Lo que va dentro de value es el lugar donde alamcenamos los datos de nuestro carrito.

// En cartContext necesito exportar el Contexto y el Provider

//item es un objeto
// count es un entero