import {SEARCH_FOR_VIDEOS} from '../actions/search';
import {SUCCESS} from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case SEARCH_FOR_VIDEOS[SUCCESS]:
      return reduceSearchForVideos(action.response, action.searchQuery);
  }
}

function reduceSearchForVideos(response, searchQuery) {
  return {
    totalResults: response.pageInfo.totalResults,
    nextPageToken: response.nextPageToken,
    query: searchQuery,
    results: response.items
  };
}