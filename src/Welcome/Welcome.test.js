import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Welcome from "./Welcome";

describe("Componenet ====  Welcome", () => {
    it("should match snapshot", () => {
        let wrapper = shallow(<Welcome />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});