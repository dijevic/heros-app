import { heroes } from "../data/heroes"

export const getHeroeByid = (id) => {


    return heroes.filter(hero => hero.id === id)

}
