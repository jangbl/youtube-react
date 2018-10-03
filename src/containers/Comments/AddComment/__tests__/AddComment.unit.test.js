import React from 'react';
import {shallow} from 'enzyme';
import {AddComment} from '../AddComment';

test('AddComment renders correctly', () => {
  const wrapper = shallow(
    <AddComment/>
  );
  expect(wrapper).toMatchSnapshot();
});