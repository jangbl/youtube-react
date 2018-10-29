import React from 'react';
import {shallow} from 'enzyme';
import {InfiniteScroll} from '../InfiniteScroll';

test('renders empty <InfiniteScroll/>', () => {
  const wrapper = shallow(<InfiniteScroll/>);
  expect(wrapper).toMatchSnapshot();
});

test('renders <InfiniteScroll/> with tall child', () => {
  const wrapper = shallow(<InfiniteScroll>
    <div />
  </InfiniteScroll>);
  expect(wrapper).toMatchSnapshot();
});