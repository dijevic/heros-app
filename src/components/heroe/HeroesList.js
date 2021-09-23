import React, { useMemo } from 'react'
import { getHeroeByPublisher } from '../../selectors/GetHeroeByPublisher'
import { HeroeCard } from './HeroeCard'

export const HeroesList = ({ publisher, history }) => {


    const heroes = useMemo(() => getHeroeByPublisher(publisher), [publisher])


    return (
        <div className="card-columns row row-cols-1 row-cols-md-3 g-4">
            {
                heroes.map(hero => {
                    return <HeroeCard
                        key={hero.id}
                        {...hero}

                    >{hero.superhero}</HeroeCard>

                })

            }
        </div>
    )
}
