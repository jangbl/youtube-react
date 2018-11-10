import {fork, take, all, put, call} from 'redux-saga/effects';
import * as watchActions from '../actions/watch';
import {
  buildVideoDetailRequest,
  buildRelatedVideosRequest,
} from '../api/youtube-api';
import {REQUEST} from '../actions';
import {SEARCH_LIST_RESPONSE} from '../api/youtube-api-response-types';

export function* fetchWatchDetails(videoId) {
  let requests = [
    buildVideoDetailRequest.bind(null, videoId),
    buildRelatedVideosRequest.bind(null, videoId),
  ];

  try {
    const responses = yield all(requests.map(fn => call(fn)));
    yield put(watchActions.details.success(responses));
    yield call (fetchVideoDetails, responses, responses.length < 4);
  } catch (error) {
    yield put(watchActions.details.failure(error));
  }
}

function* fetchVideoDetails(responses) {
  const searchListResponse = responses.find(response => response.result.kind === SEARCH_LIST_RESPONSE);
  const relatedVideoIds =  searchListResponse.result.items.map(relatedVideo => relatedVideo.id.videoId);

  const requests = relatedVideoIds.map(relatedVideoId => {
    return buildVideoDetailRequest.bind(null, relatedVideoId);
  });

  try {
    const responses = yield all(requests.map(fn => call(fn)));
    yield put(watchActions.videoDetails.success(responses));
  } catch (error) {
    yield put(watchActions.videoDetails.failure(error));
  }
}


/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/
export function* watchWatchDetails() {
  while (true) {
    const {videoId, channelId, amount} = yield take(watchActions.WATCH_DETAILS[REQUEST]);
    yield fork(fetchWatchDetails, videoId, channelId, amount);
  }
}