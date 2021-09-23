import React from 'react'
import {
    Switch,
    Route,
    Redirect

} from "react-router-dom";
import { DcScreen } from '../components/dc/DcScreen'
import { HeroeScreen } from '../components/heroe/HeroeScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/NavBar';

export const DashboarRoutes = () => {
    return (
        <>

            <Navbar />
            <div className="container mt-3">
                <Switch>
                    <Route exact component={MarvelScreen} path='/marvel' />
                    <Route exact component={HeroeScreen} path='/hero/:id' />
                    <Route exact component={DcScreen} path='/dc' />
                    <Route exact component={SearchScreen} path='/search' />

                    <Redirect to='/marvel' />
                </Switch>
            </div>
        </>
    )
}
