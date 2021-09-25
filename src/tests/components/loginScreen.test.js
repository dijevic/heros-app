import { mount } from "enzyme"
import { authContext } from "../../auth/AuthContext"
import { LoginScreen } from "../../components/login/LoginScreen"
import { types } from "../../tipos/types"

describe('pruebas en mi componente del login', () => {

    Storage.prototype.getItem = jest.fn()
    const history = {
        replace: jest.fn()
    }
    const context = {
        dispatch: jest.fn()
    }
    const wrapper = mount(
        <authContext.Provider value={context}>
            <LoginScreen history={history} />
        </authContext.Provider>)
    test('debe renderizar correctamente', () => {


        expect(wrapper).toMatchSnapshot()
    })

    test('debo llamar a mi dispatch al hacer click', () => {
        const user = {
            nombre: 'diego jesus',
            apellido: 'vielma carrero',
            id: 123456,
        }
        wrapper.find('button').simulate('click')
        expect(context.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: user
        })

        expect(history.replace).toHaveBeenCalledWith('/')

        expect(localStorage.getItem).toHaveBeenCalled()


    })
})