import React from 'react'
import PropTypes from 'prop-types'

import { Route, Redirect } from 'react-router-dom'


export const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {

    localStorage.setItem('lastPath', rest.location.pathname)
    return (
        <Route {...rest} component={(props) => (
            (isAuth)
                ? <Component {...props} />
                : <Redirect to="/login" />
        )
        } />
    )
}

PrivateRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAuth: PropTypes.bool.isRequired
}
