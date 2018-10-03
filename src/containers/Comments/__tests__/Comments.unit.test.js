import React from 'react';
import {shallow} from 'enzyme';
import {Comments} from '../Comments';

test('renders Comments with props.comments = null', () => {
  const wrapper = shallow(
    <Comments/>
  );
  expect(wrapper).toMatchSnapshot();
});
