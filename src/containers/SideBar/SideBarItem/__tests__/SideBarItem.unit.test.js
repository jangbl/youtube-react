import React from 'react';
import {shallow} from 'enzyme';
import {SideBarItem} from '../SideBarItem';

describe('SideBarItem', () => {
  test('Renders empty SideBarItem', () => {
    const wrapper = shallow(
      <SideBarItem/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('Renders highlighted SideBarItem', () => {
    const wrapper = shallow(
      <SideBarItem highlighted icon='fire' label='Trending'/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('Render non-highlighted SideBarItem', () => {
    const wrapper = shallow(
      <SideBarItem icon='fire' label='Trending'/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
