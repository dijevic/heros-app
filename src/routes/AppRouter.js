import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { authContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/login/LoginScreen";

import { DashboarRoutes } from "./DashboarRoutes";
import { PrivateRoute } from "./privateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {
    const { usuario } = useContext(authContext)
    return (
        <Router>
            <div >

                {/* llamo a mi navbar que ya tinene los links implementados */}
                {/* <Navbar /> */}
                <Switch>
                    <PublicRoute component={LoginScreen} path="/login" exact isAuth={usuario.logged} />
                    <PrivateRoute component={DashboarRoutes} path="/" isAuth={usuario.logged} />
                </Switch>
            </div>
        </Router>
    )
}
