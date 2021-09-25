import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router"
import { HeroeScreen } from "../../../components/heroe/HeroeScreen"

describe('pruebas en mi componente de hero screen', () => {




    test('debe de mostrar mi componente redirect', () => {
        const historyMock = {
            push: jest.fn(),
            length: 10,
            goBack: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroeScreen history={historyMock} />
            </MemoryRouter>
        )
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('Redirect').exists()).toBe(true)
    })

    test('debe de renderizar un heroe y aceptar parametros por el route', () => {
        const historyMock = {
            push: jest.fn(),
            length: 10,
            goBack: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/dc-batman']}>
                <Route path='/hero/:id'>
                    <HeroeScreen history={historyMock} />
                </Route>
            </MemoryRouter>
        )


        expect(wrapper.find('.row').exists()).toBe(true)

    })

    test('debe de llamar al metodo push de mi history', () => {
        const historyMock = {
            push: jest.fn(),
            length: 1,
            goBack: jest.fn()
        }


        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/dc-batman']}>
                <Route path='/hero/:id'>
                    <HeroeScreen history={historyMock} />
                </Route>
            </MemoryRouter>
        )

        wrapper.find('button').simulate('click')
        expect(historyMock.push).toHaveBeenCalled()
        expect(historyMock.goBack).not.toHaveBeenCalled()


    })
    test('debe de llamar al metodo goBack de mi history', () => {
        const historyMock = {
            push: jest.fn(),
            length: 10,
            goBack: jest.fn()
        }


        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/dc-batman']}>
                <Route path='/hero/:id'>
                    <HeroeScreen history={historyMock} />
                </Route>
            </MemoryRouter>
        )

        wrapper.find('button').simulate('click')
        expect(historyMock.goBack).toHaveBeenCalled()

        expect(historyMock.push).not.toHaveBeenCalled()


    })

    test('debe de mostrar mi componente redirect si el heroe no existe', () => {
        const historyMock = {
            push: jest.fn(),
            length: 10,
            goBack: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/32132123123']}>
                <HeroeScreen history={historyMock} />
            </MemoryRouter>
        )
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('Redirect').exists()).toBe(true)
    })
})