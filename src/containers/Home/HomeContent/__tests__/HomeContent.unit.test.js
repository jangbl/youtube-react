import {shallow} from 'enzyme';
import {HomeContent} from '../HomeContent';
import React from 'react';

describe('HomeContent', () => {
  test('renders', () => {
    const wrapper = shallow(
      <HomeContent bottomReachedCallback={jest.fn()} showLoader={true} ideosByCategory={[]} mostPopularVideos={[]}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});