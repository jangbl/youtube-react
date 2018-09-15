import React from 'react';
import {shallow} from 'enzyme';
import {Subscriptions} from '../Subscriptions';

describe('Subscriptions', () => {
  test('renders', () => {
    const wrapper = shallow(
      <Subscriptions/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});