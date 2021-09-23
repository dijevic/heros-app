import React from 'react'

export const LoginScreen = ({ history }) => {
    // el history vienbe en los props de los componentes
    const handleClick = () => {
        // history.push('/')
        history.replace('/')
    }
    return (
        <div className="container mt-5">
            <h1>Login screen</h1>

            <button className="btn btn-primary" onClick={handleClick}>Ingresar</button>
        </div>
    )
}
