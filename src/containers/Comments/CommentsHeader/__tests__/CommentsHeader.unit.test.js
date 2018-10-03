import React from 'react';
import {shallow} from 'enzyme';
import {CommentsHeader} from '../CommentsHeader';

test('CommentsHeader renders with props.amountComments = null', () => {
  const wrapper = shallow(
    <CommentsHeader/>
  );
  expect(wrapper).toMatchSnapshot();
});

test('CommentsHeader renders with props.amountComments = 0', () => {
  const wrapper = shallow(
    <CommentsHeader amountComments={0}/>
  );
  expect(wrapper).toMatchSnapshot();
});

test('CommentsHeader renders with props.amountComments = 1', () => {
  const wrapper = shallow(
    <CommentsHeader amountComments={1}/>
  );
  expect(wrapper).toMatchSnapshot();
});

test('CommentsHeader renders with props.amountComments = 5', () => {
  const wrapper = shallow(
    <CommentsHeader amountComments={5}/>
  );
  expect(wrapper).toMatchSnapshot();
});