import React, { useMemo } from 'react'
import { useLocation } from 'react-router';
import queryString from 'query-string'
import { UseForm } from '../../hooks/useForm';
import { HeroeCard } from '../heroe/HeroeCard';
import { getHeroeByName } from '../../selectors/GetHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation()
    const { q = '' } = queryString.parse(location.search)


    const [formValues, handleInputChange] = UseForm({
        searchText: q
    })

    const { searchText } = formValues
    const heroesFiltrados = useMemo(() => getHeroeByName(q), [q])
    const handleSearch = (e) => {

        e.preventDefault();
        history.push(`?q=${searchText}`)

    }
    return (
        <div>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>search Form</h4>
                    <hr />


                    <form onSubmit={handleSearch}>
                        <input
                            className="form-control"
                            placeholder="find tour hero"
                            type="text"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                        />


                        <button className="btn btn-primary d-inline-block w-100 mt-3" type="submit">Buscar</button>
                    </form>
                </div>

                <div className="col-7 card-columns row row-cols-1 row-cols-md-3 g-4 ">
                    <h4 className="text-center w-100">results</h4>

                    {
                        (q === '') &&
                        <div className="alert alert-info w-100">
                            Busca un heroe
                        </div>
                    }
                    {
                        (q !== '' && heroesFiltrados.length === 0) &&
                        <div className="alert alert-info w-100">
                            no existe un heroe con el nombre {q}
                        </div>
                    }

                    {heroesFiltrados.map(hero => (
                        <HeroeCard key={hero.id} {...hero} />
                    ))}
                </div>
            </div>
        </div>
    )
}
