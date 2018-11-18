import React from 'react';
import './Trending.scss';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {VideoPreview} from '../../components/VideoPreview/VideoPreview';
import {InfiniteScroll} from '../../components/InfiniteScroll/InfiniteScroll';
import * as videoActions from "../../store/actions/video";
import {
  allMostPopularVideosLoaded,
  getMostPopularVideos,
  getMostPopularVideosNextPageToken
} from '../../store/reducers/videos';
import {getYoutubeLibraryLoaded} from '../../store/reducers/api';
import {SideBar} from '../SideBar/SideBar';

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

    const previews = this.getVideoPreviews();
    const loaderActive = this.shouldShowLoader();

    return (
      <React.Fragment>
        <SideBar/>
        <div className='trending'>
          <InfiniteScroll bottomReachedCallback={this.fetchMoreVideos} showLoader={loaderActive}>
            {previews}
          </InfiniteScroll>
        </div>
      </React.Fragment>
    );
  }

  getVideoPreviews() {
    return this.props.videos.map(video => (
      <VideoPreview horizontal={true} expanded={true} video={video} key={video.id} pathname={'/watch'}
                    search={'?v=' + video.id}/>)
    );
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