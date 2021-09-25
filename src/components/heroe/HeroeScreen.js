import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroeByid } from '../../selectors/GetHeroeById'

const heroesImages = require.context('../../assets/heroes', true)

export const HeroeScreen = ({ history }) => {
    console.log(heroesImages)
    const { id } = useParams()
    const heroe = useMemo(() => getHeroeByid(id), [id])


    if (!heroe || heroe.length === 0) {

        return <Redirect to="/" />
    }

    const { superhero, publisher, alter_ego, first_appearance, characters } = heroe[0]

    const handleClick = ({ target }) => {

        if (history.length <= 2) {
            history.push('/')
        } else {
            target.parentElement.parentElement.firstElementChild.classList.add('outLeft')
            target.parentElement.parentElement.firstElementChild.nextElementSibling.classList.add('outDown')

            setTimeout(() => {
                history.goBack()

            }, 500);
        }


    }
    return (
        <div className="row mt-5 heroe-container">

            <div className="col-4">
                {/* <img src={`../assets/heroes/${id}.jpg`} alt={superhero} className="img-thumbnail " /> */}
                <img src={heroesImages(`./${id}.jpg`).default} alt={superhero} className="img-thumbnail " />
            </div>

            <div className="col-8">
                <h3>{superhero}</h3>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego:</b> {alter_ego}</li>
                    <li className="list-group-item"><b>publisher:</b> {publisher}</li>
                    <li className="list-group-item"><b>first appearance:</b>{first_appearance}</li>
                </ul>

                <h5>characters</h5>
                <p>{characters}</p>

                <button className="btn btn-primary" onClick={handleClick}>return</button>
            </div>

        </div>
    )
}
