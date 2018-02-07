import HeaderComponent, {Header} from "./Header";
import { Provider } from 'react-redux'
import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';

describe("DumbComponent === Header", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <MemoryRouter initialEntries={[ { pathname: '/', key: 'ram' } ]}>
                <Header />
            </MemoryRouter>
        );
    });

    it("must match snapshot", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("must have a header compnent", () => {
        expect(wrapper.find('Header')).toHaveLength(1)
    })

    it("must have necessary dom elements", () => {
        let dom = wrapper.find('Header').dive()
        expect(dom.find('header')).toHaveLength(1)
        expect(dom.find('nav')).toHaveLength(1)
        expect(dom.find('ul')).toHaveLength(1)
        expect(dom.find('li')).toHaveLength(2)
        expect(dom.find('Switch')).toHaveLength(1)
        expect(dom.find('Route')).toHaveLength(2)
    });
});


describe("SmartComponent === Header", () => {
    const mockStore = configureMockStore();
    let initialState = { user: { token: '', errors: [] } };
    let store;
    let wrapper;
    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(
            <MemoryRouter initialEntries={[ { pathname: '/', key: 'ram' } ]}>
                <Provider store={store}>
                    <HeaderComponent />
                </Provider>
            </MemoryRouter>
        );
    });

    it("must match snapshot", () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it("must have necessary props", () => {
        let instance = wrapper.find(Header).instance();
        let props = instance.props
       
        // MapStateToProps
        expect(props.user).toEqual(initialState.user);
        expect(props.user.token).toEqual(initialState.user.token);
        expect(props.user.errors).toEqual(initialState.user.errors);

        // MapDispatchToProps
        expect(props.signup).toBeInstanceOf(Function);
    });
});