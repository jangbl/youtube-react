import React from 'react';
import {shallow} from 'enzyme';
import {SideBar} from '../SideBar';

describe('SideBar', () => {
  test('renders', () => {
    const wrapper = shallow(
      <SideBar />
    );
    expect(wrapper).toMatchSnapshot();
  });
});