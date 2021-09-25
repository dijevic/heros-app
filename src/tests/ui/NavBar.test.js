
import { mount } from "enzyme"
import { MemoryRouter, Router } from "react-router"
import { authContext } from "../../auth/AuthContext"
import { Navbar } from "../../components/ui/NavBar"
import { types } from '../../tipos/types'

describe('pruebas en mi componente del navBar', () => {
    const historyMock = {
        push: jest.fn(),
        location: {},
        listen: jest.fn(),
        replace: jest.fn(),
        createHref: jest.fn()
    }

    const context = {
        usuario: {
            logged: true,
            nombre: 'diego vielma'
        },
        dispatch: jest.fn()
    }

    afterEach(() => {
        jest.clearAllMocks()
    })
    const wrapper = mount(
        <authContext.Provider value={context}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </authContext.Provider>)



    test('debe hcer match con el snapshot', () => {

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.name').text().trim()).toBe(context.usuario.nombre)

    })

    test('debe llamar a la funcion de logOut y la historyMock para reubicar la pagina', () => {

        wrapper.find('button').prop('onClick')()

        expect(context.dispatch).toHaveBeenCalledWith({ type: types.logOut })
        expect(historyMock.replace).toHaveBeenCalled()
    })
})