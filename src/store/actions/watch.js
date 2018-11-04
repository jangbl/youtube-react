import {createAction, createRequestTypes, FAILURE, REQUEST, SUCCESS} from './index';

export const WATCH_DETAILS = createRequestTypes('WATCH_DETAILS');
export const details = {
  request: (videoId, channelId, amount) => createAction(WATCH_DETAILS[REQUEST], {videoId, channelId, amount}),
  success: (response) => createAction(WATCH_DETAILS[SUCCESS], {response}),
  failure: (response) => createAction(WATCH_DETAILS[FAILURE], {response}),
};