import { mount } from "enzyme"
import { authContext } from "../../auth/AuthContext"
import { AppRouter } from "../../routes/AppRouter"

describe('pruebas en router app', () => {
    const context = {
        usuario: {
            logged: false
        },
        dispatch: jest.fn()
    }


    test('renderizar el login si no est autenticado', () => {
        const wrapper = mount(
            <authContext.Provider value={context}>
                <AppRouter />

            </authContext.Provider>)

        expect(wrapper.find('h1').text().trim()).toBe('Login screen')

    })
    test('renderizar el screen de marvel   ', () => {
        const context = {
            usuario: {
                logged: true,
                nombre: 'diego vielma'
            },
            dispatch: jest.fn()
        }
        const wrapper = mount(
            <authContext.Provider value={context}>
                <AppRouter />

            </authContext.Provider>)

        expect(wrapper).toMatchSnapshot()
    })
})