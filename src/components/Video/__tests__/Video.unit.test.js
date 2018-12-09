import React from 'react';
import {Video} from '../Video';
import {shallow} from 'enzyme';

describe('Video', () => {
  test('renders video component correctly', () => {
    const wrapper = shallow(
      <Video id='HAuXJVI_bUs'/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('renders null if id in video component not specified', () => {
    const wrapper = shallow(
      <Video/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
