import {MOST_POPULAR, VIDEO_CATEGORIES} from '../actions/video';
import {SUCCESS} from '../actions';
import {createSelector} from 'reselect';

const initialState = {
  byId: {},
  mostPopular: {},
  categories: {},
};
export default function videos(state = initialState, action) {
  switch (action.type) {
    case MOST_POPULAR[SUCCESS]:
      return reduceFetchMostPopularVideos(action.response, state);
    case VIDEO_CATEGORIES[SUCCESS]:
      return reduceFetchVideoCategories(action.response, state);
    default:
      return state;
  }
}

function reduceFetchMostPopularVideos(response, prevState) {
  const videoMap = response.items.reduce((accumulator, video) => {
    accumulator[video.id] = video;
    return accumulator;
  }, {});

  let items = Object.keys(videoMap);
  if (response.hasOwnProperty('prevPageToken') && prevState.mostPopular) {
    items = [...prevState.mostPopular.items, ...items];
  }

  const mostPopular = {
    totalResults: response.pageInfo.totalResults,
    nextPageToken: response.nextPageToken,
    items,
  };

  return {
    ...prevState,
    mostPopular,
    byId: {...prevState.byId, ...videoMap},
  };
}

function reduceFetchVideoCategories(response, prevState) {
  const categoryMapping = response.items.reduce((accumulator, category) => {
    accumulator[category.id] = category.snippet.title;
    return accumulator;
  }, {});
  return {
    ...prevState,
    categories: categoryMapping,
  };
}

/*
*   Selectors
* */

export const getMostPopularVideos = createSelector(
  (state) => state.videos.byId,
  (state) => state.videos.mostPopular,
  (videosById, mostPopular) => {
    if (!mostPopular || !mostPopular.items) {
      return [];
    }
    return mostPopular.items.map(videoId => videosById[videoId]);
  }
);
export const getVideoCategories = (state) => state.videos.categories;
/*export const getVideoCategories = createSelector(
  state => state.videos.categories,
  (categories) => categories
);*/