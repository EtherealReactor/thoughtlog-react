import React from 'react';
import { shallow } from 'enzyme';
import shallowToJson from 'enzyme-to-json';
import LoginForm from './Login';

describe("<LoginForm />", () => {
  it("must render LoginForm", () => {
    const wrapper = shallow(<LoginForm />)
    expect(wrapper).toHaveLength(1);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});