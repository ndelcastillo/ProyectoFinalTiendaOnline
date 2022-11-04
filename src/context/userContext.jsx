import React, { createContext, useState } from 'react';

//1) Creamos un context con createContext
const userContext = createContext({ username: "", logedIn: false });

//2) Definimos el Provider
export default function UserContextProvider(props) {
    const [username, setUsername] = useState("Hola")
    const [logedIn, setLogedIn] = useState(false)

    function authUser(name) {
        if (name.length < 3)
        setUsername(name)
    }

    console.log("Tenemos context provider")
    return (
        //3) Pasamos al Provider el "value" para los componentes que consuman el context
        <userContext.Provider value={{
            logedIn,
            username,
            setUsername
        }}>
            {props.children}
        </userContext.Provider>
    )
}

export { userContext }

