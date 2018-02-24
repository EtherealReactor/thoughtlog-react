import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import SideBar from './SideBar';

describe("Component === Thoughts === Sidebar", () => {
  it("must match snapshot", () => {
    let wrapper = shallow(<SideBar />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("should contain all the necessary dom", () => {
    let wrapper = shallow(<SideBar />);
    expect(wrapper.find('aside')).toHaveLength(1);
    expect(wrapper.find('nav')).toHaveLength(1);
    expect(wrapper.find('ul')).toHaveLength(1);
    expect(wrapper.find('li')).toHaveLength(2);
    expect(wrapper.find('Link')).toHaveLength(2);
  });
});