import { mount } from "enzyme"
import toJson from "enzyme-to-json"
import { MemoryRouter } from "react-router"
import { PrivateRoute } from "../../routes/privateRoute"

describe('pruebas en mi componente de rutas privadas para el login', () => {
    Storage.prototype.setItem = jest.fn()
    const props = {
        location: {
            pathname: '/marvel'
        }
    }
    test('debe mostrar si el componente esta logeado y guardar en el locaStorage', () => {

        const wrapper = mount(

            <MemoryRouter>
                <PrivateRoute
                    isAuth={true}
                    component={() => <p>ready</p>}
                    {...props}
                />

            </MemoryRouter>
        )
        expect(wrapper.find('p').exists()).toBe(true)
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', props.location.pathname)
    })

    test('no debe de mostrar el componente y bloquearlo', () => {
        const wrapper = mount(

            <MemoryRouter>
                <PrivateRoute
                    isAuth={false}
                    component={() => <p>ready</p>}
                    {...props}
                />

            </MemoryRouter>

        )
        console.log(toJson(wrapper))
        expect(wrapper.find('p').exists()).toBe(false)

    })
})