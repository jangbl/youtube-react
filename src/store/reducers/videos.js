import {MOST_POPULAR, MOST_POPULAR_BY_CATEGORY, VIDEO_CATEGORIES} from '../actions/video';
import {SUCCESS} from '../actions';
import {createSelector} from 'reselect';

const initialState = {
  byId: {},
  mostPopular: {},
  categories: {},
  byCategory: {},
};
export default function videos(state = initialState, action) {
  switch (action.type) {
    case MOST_POPULAR[SUCCESS]:
      return reduceFetchMostPopularVideos(action.response, state);
    case VIDEO_CATEGORIES[SUCCESS]:
      return reduceFetchVideoCategories(action.response, state);
    case MOST_POPULAR_BY_CATEGORY[SUCCESS]:
      return reduceFetchMostPopularVideosByCategory(action.response, action.categories, state);
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

function reduceFetchMostPopularVideosByCategory(responses, categories, prevState) {
  const {videoMap, byCategoryMap} = responses.reduce((accumulator, response, index) => {
    // ignore the responses that contain errors
    // the Youtube API might not return most popular videos for every category id
    if (response.status === 400) {
      return accumulator;
    }
    const categoryId = categories[index];
    const {byId, byCategory} = groupVideosByIdAndCategory(response.result, categoryId);
    // merge videoMaps and categoryMaps together for all requests into one object
    return {
      videoMap: {...accumulator.videoMap, ...byId},
      byCategoryMap: {...accumulator.byCategoryMap, ...byCategory},
    };
  }, {videoMap: {}, byCategoryMap: {}});

  // compute new state
  return {
    ...prevState,
    byId: {...prevState.byId, ...videoMap},
    byCategory: {...prevState.byCategory, ...byCategoryMap},
  };
}
function groupVideosByIdAndCategory(response, categoryId) {
  const videos = response.items;
  return videos.reduce((accumulator, video) => {
    accumulator.byId[video.id] = video;
    if(!accumulator.byCategory[categoryId]) {
      accumulator.byCategory[categoryId] = {
        totalResults: response.pageInfo.totalResults,
        nextPageToken: response.nextPageToken,
      };
    }
    let updatedItems = [video.id];
    let {items} = accumulator.byCategory[categoryId];
    if (items && items.length) {
      // if we already have some video ids, we must not
      // throw away the elements we already have
      // in this case we just prepend them to the array
      updatedItems = [...items, ...updatedItems];
    }
    accumulator.byCategory[categoryId].items = updatedItems;
    return accumulator;
  }, {byId: {}, byCategory: {}});
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
export const getVideoCategoryIds = createSelector(
  state => state.videos.categories,
  (categories) => {
    return Object.keys(categories || {});
  }
);

export const getVideosByCategory = createSelector(
  state => state.videos.byCategory,
  state => state.videos.byId,
  state => state.videos.categories,
  (videosByCategory, videosById, categories) => {
    return Object.keys(videosByCategory || {}).reduce((accumulator, categoryId) => {
      const videoIds = videosByCategory[categoryId].items;
      const categoryTitle = categories[categoryId];
      accumulator[categoryTitle] = videoIds.map(videoId => videosById[videoId]);
      return accumulator;
    }, {});
  }
);

export const videoCategoriesLoaded = createSelector(
  state => state.videos.categories,
  (categories) => {
    return Object.keys(categories || {}).length !== 0;
  }
);

export const videosByCategoryLoaded = createSelector(
  state => state.videos.byCategory,
  (videosByCategory) => {
    return Object.keys(videosByCategory || {}).length;
  }
);
/*export const getVideoCategories = createSelector(
  state => state.videos.categories,
  (categories) => categories
);*/