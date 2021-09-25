import { mount } from "enzyme"
import { MemoryRouter } from "react-router"
import { authContext } from "../../auth/AuthContext"
import { DashboarRoutes } from "../../routes/DashboarRoutes"

describe('pruebas en mi componente dashboard routes', () => {
    const context = {
        usuario: {
            logged: true,
            nombre: 'diego vielma'
        },
        dispatch: jest.fn()
    }

    test('debe de hacer match con el snapshot', () => {
        const wrapper = mount(

            <authContext.Provider value={context}>
                <MemoryRouter>
                    <DashboarRoutes />

                </MemoryRouter>
            </authContext.Provider>)

        expect(wrapper).toMatchSnapshot()
    })
})