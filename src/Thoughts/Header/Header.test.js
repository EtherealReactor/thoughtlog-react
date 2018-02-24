import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from './Header';

describe("Component === Thoughts === Header", () => {
  it("must match snapshot", () => {
    let wrapper = shallow(<Header />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("should contain all the necessary dom", () => {
    let wrapper = shallow(<Header />);
    expect(wrapper.find('div')).toHaveLength(3);
    expect(wrapper.find('header')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find('span')).toHaveLength(2);
  });
});