import React from 'react'
import { /* Link */ useHistory } from 'react-router-dom'
const heroesImages = require.context('../../assets/heroes', true)

export const HeroeCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters }) => {
    const history = useHistory()
    const handleClick = ({ target }) => {

        // target.parentElement.firstElementChild.classList.add('outLeft')
        target.parentElement.classList.add('outLeft')

        setTimeout(() => {
            window.scrollTo(0, 0)
            history.push(`./hero/${id}`)
        }, 500)

        // elimine los link y agregue un div haciendo pruebas ***********NOTA************

    }

    return (
        <div /* to={} */ className="my-card" onClick={handleClick}>
            <img src={heroesImages(`./${id}.jpg`).default} className="img img-responsive" alt={superhero} loading="lazy" />
            <div className="profile-name">{superhero}</div>
            <div className="profile-position">{alter_ego}</div>
            <div className="profile-overview">
                <div className="profile-overview">
                    <div className="row">
                        <div className="col-ms-4">
                            <h3>{publisher}</h3>
                            <p>Primera aparición: <br />{first_appearance}</p>
                            {
                                (alter_ego !== characters)
                                && <p>{characters}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
