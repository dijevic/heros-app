import { authReducer } from "../../auth/authReducer"
import { types } from "../../tipos/types"

describe('pruebas en mi reducer auth', () => {
    test('debe de retornar el estado por defecto', () => {
        const state = authReducer({ logged: false }, {})
        expect(state).toEqual({ logged: false })
    })

    test('debe de loguearse ,colocar el nombre en el state del reducer y el logged:true', () => {

        const action = {
            type: types.login,
            payload: {
                nombre: 'diego vielma'
            }
        }
        const state = authReducer({}, action)
        expect(state).toEqual({ logged: true, nombre: 'diego vielma' })
    })

    test('debe de hacer el logOut correctamente', () => {
        const action = {
            type: types.logOut,
        }
        const state = authReducer({}, action)
        expect(state).toEqual({ logged: false })
    })
})