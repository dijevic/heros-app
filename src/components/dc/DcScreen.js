import React from 'react'
import { HeroesList } from '../heroe/HeroesList'

export const DcScreen = ({ history }) => {
    const publisher = `DC Comics`
    return (
        <div>
            <h1>DC Comics || Heroes</h1>
            <hr className="mt-3" />

            <HeroesList publisher={publisher} history={history} />
        </div>
    )
}
