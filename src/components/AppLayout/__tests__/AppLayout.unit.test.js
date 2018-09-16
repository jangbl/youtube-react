import React from 'react';
import {shallow} from 'enzyme';
import {AppLayout} from '../AppLayout';

test('renders empty <AppLayout/>', () => {
  const wrapper = shallow(
    <AppLayout/>
  );
  expect(wrapper).toMatchSnapshot();
});

test('renders <AppLayout/> with one child', () => {
  const wrapper = shallow(
    <AppLayout>
      <div>Child 1</div>
    </AppLayout>
  );
  expect(wrapper).toMatchSnapshot();
});

test('renders <AppLayout/> with children', () => {
  const wrapper = shallow(
    <AppLayout>
      <div>Child</div>
      <div>
        <span>Child</span>
        <p>Child</p>
      </div>
    </AppLayout>
  );
  expect(wrapper).toMatchSnapshot();
});