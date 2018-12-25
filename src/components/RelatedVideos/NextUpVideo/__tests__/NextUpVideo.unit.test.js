import React from 'react';
import {shallow} from 'enzyme';
import {NextUpVideo} from '../NextUpVideo';

describe('NextUpVideo', () => {
  test('renders', () => {
    const video = {
      id: 'some-id'
    };
    const wrapper = shallow(<NextUpVideo video={video}/>);
    expect(wrapper).toMatchSnapshot();
  });
});