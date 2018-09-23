import React from 'react';
import App from '../App';
import {shallow} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';

test('renders <App/>', () => {
  const wrapper = shallow(
    <MemoryRouter><App/></MemoryRouter>
  );
  expect(wrapper).toMatchSnapshot();
});