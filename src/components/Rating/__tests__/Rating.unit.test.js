import React from 'react';
import {shallow} from 'enzyme';
import {Rating} from '../Rating';

describe('Rating', () => {
  test('renders', () => {
    const wrapper = shallow(<Rating/>);
    expect(wrapper).toMatchSnapshot();
  });
});

