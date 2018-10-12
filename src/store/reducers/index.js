import apiReducer from './api';
import {combineReducers} from 'redux';

export default combineReducers({
  api: apiReducer,
});