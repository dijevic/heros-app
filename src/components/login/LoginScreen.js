import React, { useContext } from 'react'
import { authContext } from '../../auth/AuthContext'
import { types } from '../../tipos/types'

export const LoginScreen = ({ history }) => {
    const { dispatch } = useContext(authContext)
    const handleClick = () => {
        const path = localStorage.getItem('lastPath') || '/'
        const user = {
            nombre: 'diego jesus',
            apellido: 'vielma carrero',
            id: 123456,
        }
        dispatch({
            type: types.login,
            payload: user
        })
        history.replace(path)



    }
    return (
        <div className="container mt-5">
            <h1>Login screen</h1>

            <button className="btn btn-primary" onClick={handleClick}>Ingresar</button>
        </div>
    )
}
