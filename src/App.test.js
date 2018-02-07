import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';


describe("Component === App", () => {
  it("should match snapshot", () => {
    let wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("must contain a div", () => {
    let wrapper = shallow(<App />);
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it("must contain a welcome component", () => {
    let wrapper = shallow(<App />);
    expect(wrapper.find('Welcome')).toHaveLength(1);
  });
});