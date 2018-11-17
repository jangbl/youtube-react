import {createAction, createRequestTypes, FAILURE, REQUEST, SUCCESS} from './index';

export const COMMENT_THREAD = createRequestTypes('COMMENT_THREAD');
export const thread = {
  request: (videoId, nextPageToken) => createAction(COMMENT_THREAD[REQUEST], {videoId, nextPageToken}),
  success: (response, videoId) => createAction(COMMENT_THREAD[SUCCESS], {response, videoId}),
  failure: (response) => createAction(COMMENT_THREAD[FAILURE], {response}),
};