import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router"
import { SearchScreen } from "../../../components/search/SearchScreen"

describe('pruebas en mi componente de Search screen', () => {

    test('debe hacer match con el snapshot por defecto', () => {
        const wrapper = mount(
            <MemoryRouter>
                <SearchScreen />
            </MemoryRouter>
        )
        expect(wrapper.find('.alert-info').text().trim()).toBe('Busca un heroe')
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de leer y buscar por parametro', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search">
                    <SearchScreen />
                </Route>
            </MemoryRouter>
        )
        expect(wrapper.find('input').prop('value')).toBe('batman')
        expect(wrapper).toMatchSnapshot()

    })

    test('debe mostrar un error si la ruta de busqueda o existe', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=1234']}>
                <Route path="/search">
                    <SearchScreen />
                </Route>
            </MemoryRouter>

        )
        expect(wrapper.find('.alert-info').text().trim()).toBe('no existe un heroe con el nombre 1234')
        expect(wrapper).toMatchSnapshot()
    })

    test('debe llamar ael history.push', () => {
        const history = {
            push: jest.fn()
        }
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=1234']}>
                <Route path="/search">
                    <SearchScreen history={history} />
                </Route>
            </MemoryRouter>

        )

        wrapper.find('input').simulate('change', {
            target: {
                name: 'searchText',
                value: 'batman'
            }
        })

        wrapper.find('form').simulate('submit')
        expect(history.push).toHaveBeenCalledWith(`?q=batman`)


    })
})