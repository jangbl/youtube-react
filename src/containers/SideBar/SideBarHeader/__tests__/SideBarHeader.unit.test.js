import React from 'react';
import {shallow} from 'enzyme';
import {SideBarHeader} from '../SideBarHeader';

describe('SideBarHeader', () => {
  test('renders without title', () => {
    const wrapper = shallow(<SideBarHeader/>);
    expect(wrapper).toMatchSnapshot();
  });
  test('renders with empty title', () => {
    const wrapper = shallow(<SideBarHeader title=''/>);
    expect(wrapper).toMatchSnapshot();
  });
  test('renders with title', () => {
    const wrapper = shallow(<SideBarHeader title='Just a title'/>);
    expect(wrapper).toMatchSnapshot();
  });
});