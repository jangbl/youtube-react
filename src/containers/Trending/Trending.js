import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as videoActions from "../../store/actions/video";
import {
  allMostPopularVideosLoaded,
  getMostPopularVideos,
  getMostPopularVideosNextPageToken
} from '../../store/reducers/videos';
import {getYoutubeLibraryLoaded} from '../../store/reducers/api';
import {VideoList} from '../../components/VideoList/VideoList';

class Trending extends React.Component {
  componentDidMount() {
    this.fetchTrendingVideos();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.youtubeLibraryLoaded !== this.props.youtubeLibraryLoaded) {
      this.fetchTrendingVideos();
    }
  }

  render() {
    const loaderActive = this.shouldShowLoader();

    return (<VideoList
      bottomReachedCallback={this.fetchMoreVideos}
      showLoader={loaderActive}
      videos={this.props.videos}/>);
  }


  fetchMoreVideos = () => {
    const {nextPageToken} = this.props;
    if (this.props.youtubeLibraryLoaded && nextPageToken) {
      this.props.fetchMostPopularVideos(12, true, nextPageToken);
    }
  };

  fetchTrendingVideos() {
    if (this.props.youtubeLibraryLoaded) {
      this.props.fetchMostPopularVideos(20, true);
    }
  }

  shouldShowLoader() {
    return !this.props.allMostPopularVideosLoaded;
  }
}

function mapStateToProps(state) {
  return {
    videos: getMostPopularVideos(state),
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
    allMostPopularVideosLoaded: allMostPopularVideosLoaded(state),
    nextPageToken: getMostPopularVideosNextPageToken(state),
  };
}

function mapDispatchToProps(dispatch) {
  const fetchMostPopularVideos = videoActions.mostPopular.request;
  return bindActionCreators({fetchMostPopularVideos}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Trending);