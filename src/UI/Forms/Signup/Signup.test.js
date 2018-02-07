import React from 'react';
import { shallow, mount } from 'enzyme';
import shallowToJson from 'enzyme-to-json';
import SignupForm from './Signup';

describe("FormComponent === Signup", () => {
  it("must render SignupForm", () => {
    const wrapper = shallow(<SignupForm />)
    expect(wrapper).toHaveLength(1);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});