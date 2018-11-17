import {createAction, createRequestTypes, FAILURE, REQUEST, SUCCESS} from './index';

export const WATCH_DETAILS = createRequestTypes('WATCH_DETAILS');
export const details = {
  request: (videoId, channelId) => createAction(WATCH_DETAILS[REQUEST], {videoId, channelId}),
  success: (response, videoId) => createAction(WATCH_DETAILS[SUCCESS], {response, videoId}),
  failure: (response) => createAction(WATCH_DETAILS[FAILURE], {response}),
};

export const VIDEO_DETAILS = createRequestTypes('VIDEO_DETAILS');
export const videoDetails = {
  request: () => {
    throw Error('not implemented');
  },
  success: (response) => createAction(VIDEO_DETAILS[SUCCESS], {response}),
  failure: (response) => createAction(VIDEO_DETAILS[FAILURE], {response}),
};