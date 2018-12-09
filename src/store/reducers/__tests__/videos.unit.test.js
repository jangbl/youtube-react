import videosReducer, {initialState} from '../videos';
import {MOST_POPULAR } from '../../actions/video';
import {SUCCESS} from '../../actions';
import mostPopularResponse from './responses/MOST_POPULAR_SUCCESS';
import mostPopularSuccessState from './states/MOST_POPULAR_SUCCESS';


describe('videos reducer', () => {
  test('test undefined action type and initial state with videos reducer', () => {
    const expectedEndState = {...initialState};
    expect(videosReducer(undefined, {type: 'some-unused-type'})).toEqual(expectedEndState);
  });

  test('test MOST_POPULAR_SUCCESS action in video reducer', () => {
    const startState = {...initialState};
    const action = {
      type: MOST_POPULAR[SUCCESS],
      response: mostPopularResponse,
    };
    const expectedEndState = {
      ...startState,
      ...mostPopularSuccessState
    };
    expect(videosReducer(startState, action)).toEqual(expectedEndState);
  });
});

