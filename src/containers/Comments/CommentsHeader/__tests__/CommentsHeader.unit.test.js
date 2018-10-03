import React from 'react';
import {shallow} from 'enzyme';
import {CommentsHeader} from '../CommentsHeader';

describe('CommentsHeader', () => {
  test('CommentsHeader renders with props.amountComments = null', () => {
    const wrapper = shallow(
      <CommentsHeader/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('CommentsHeader renders with props.amountComments = 0', () => {
    const wrapper = shallow(
      <CommentsHeader amountComments={123}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});