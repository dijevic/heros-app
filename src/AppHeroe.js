import React, { useEffect, useReducer } from 'react'
import { AppRouter } from './routes/AppRouter'
import { authReducer } from './auth/authReducer'
import { authContext } from './auth/AuthContext'

export const AppHeroe = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('user')) || { logged: false, }
    }

    const [usuario, dispatch] = useReducer(authReducer, {}, init)

    // efecto para que guarde en mi local mi usuario y el login 

    useEffect(() => {

        localStorage.setItem('user', JSON.stringify(usuario))
    }, [usuario])
    return (
        <authContext.Provider value={{ usuario, dispatch }}>
            <AppRouter />

        </authContext.Provider>
    )
}
