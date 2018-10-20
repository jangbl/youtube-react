import apiReducer from './api';
import {combineReducers} from 'redux';
import videosReducer from './videos'

export default combineReducers({
  api: apiReducer,
  videos: videosReducer
});