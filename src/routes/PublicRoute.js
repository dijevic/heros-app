import React from 'react'
import PropTypes from 'prop-types'

import { Route, Redirect } from 'react-router-dom'


export const PublicRoute = ({ component: Component, isAuth, ...rest }) => {


    return (
        <Route {...rest} component={(props) => (
            (!isAuth)
                ? <Component {...props} />
                : <Redirect to="/" />
        )
        } />
    )
}

PublicRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAuth: PropTypes.bool.isRequired
}