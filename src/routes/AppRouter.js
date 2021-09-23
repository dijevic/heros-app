import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";

import { DashboarRoutes } from "./DashboarRoutes";


export const AppRouter = () => {
    return (
        <Router>
            <div >

                {/* llamo a mi navbar que ya tinene los links implementados */}
                {/* <Navbar /> */}
                <Switch>
                    <Route component={LoginScreen} path="/login" exact />
                    <Route component={DashboarRoutes} path="/" />
                </Switch>
            </div>
        </Router>
    )
}
