import React from 'react';
import {SideBarFooter} from '../SideBarFooter';
import {shallow} from 'enzyme';

describe('SideBarFooter', () => {
  test('renders', () => {
    const wrapper = shallow(<SideBarFooter/>);
    expect(wrapper).toMatchSnapshot();
  });
});