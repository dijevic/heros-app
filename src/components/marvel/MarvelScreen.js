import React from 'react'
import { HeroesList } from '../heroe/HeroesList'

export const MarvelScreen = () => {
    const publisher = `Marvel Comics`
    return (
        <div>
            <h1>marvel Comics || Heroes</h1>
            <hr className="mt-3" />
            <HeroesList publisher={publisher} />
        </div>
    )
}
