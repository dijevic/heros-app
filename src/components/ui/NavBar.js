import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { authContext } from '../../auth/AuthContext'
import { types } from '../../tipos/types'

export const Navbar = () => {
    const { usuario, dispatch } = useContext(authContext)
    const history = useHistory()
    const handleLogOut = () => {
        dispatch({
            type: types.logOut
        })
        history.replace('/login')

    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">

            <Link
                className="navbar-brand"
                to="/"
            >
                Heroes
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/search"
                    >
                        search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 ">
                <ul className="navbar-nav ml-auto d-flex ">
                    <p className="nav-item nav-link">{usuario.logged && <b>{usuario.nombre}</b>}</p>
                    <button
                        className="nav-item nav-link btn btn-danger"
                        onClick={handleLogOut}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}