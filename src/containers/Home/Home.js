import React from "react"
import ReactPlayer from "react-player"
import {Route} from 'react-router-dom';

import {connect} from "react-redux";
import * as videoActions from "../../store/actions/video";
import './Home.scss';
import {SideBar} from '../SideBar/SideBar';
import HomeContent from './HomeContent/HomeContent';
import {bindActionCreators} from 'redux';
import {getYoutubeLibraryLoaded} from '../../store/reducers/api';
import {getVideoCategoryIds, videoCategoriesLoaded, videosByCategoryLoaded} from '../../store/reducers/videos';
import { Switch } from "react-router-dom";
import TestSearch from "../TestSearch/TestSearch";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryIndex: 0,
    };
  }

  render() {
    return (
      <React.Fragment>
        {/*<SideBar/>*/}
        {/* <HomeContent
          bottomReachedCallback={this.bottomReachedCallback}
          showLoader={this.shouldShowLoader()}/> */}
          <div style={{
        position: 'absolute', left: '50%', top: '90%',
        transform: 'translate(-50%, -50%)'
    }}>
            <ReactPlayer
              url="videos/video-output.mp4"
              controls={true} 
            />
            <ReactPlayer
              url="videos/video-output-2.mkv"
              controls={true} 
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=PgV7dn_59YE"
            />
          </div>
          
      </React.Fragment>
    );
  }

  componentDidMount() {
    if (this.props.youtubeLibraryLoaded) {
      this.fetchCategoriesAndMostPopularVideos();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
      this.fetchCategoriesAndMostPopularVideos();
    } else if (this.props.videoCategories !== prevProps.videoCategories) {
      this.fetchVideosByCategory();
    }
  }

  fetchVideosByCategory() {
    const categoryStartIndex = this.state.categoryIndex;
    const categories = this.props.videoCategories.slice(categoryStartIndex, categoryStartIndex + 3);
    this.props.fetchMostPopularVideosByCategory(categories);
    this.setState(prevState => {
      return {
        categoryIndex: prevState.categoryIndex + 3,
      };
    });
  }

  fetchCategoriesAndMostPopularVideos() {
    this.props.fetchMostPopularVideos();
    this.props.fetchVideoCategories();
  }

  bottomReachedCallback = () => {
    if (!this.props.videoCategoriesLoaded) {
      return;
    }
    this.fetchVideosByCategory();
  };

  shouldShowLoader() {
    if (this.props.videoCategoriesLoaded && this.props.videosByCategoryLoaded) {
      return this.state.categoryIndex < this.props.videoCategories.length;
    }
    return false;
  }
}

function mapStateToProps(state) {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
    videoCategories: getVideoCategoryIds(state),
    videoCategoriesLoaded: videoCategoriesLoaded(state),
    videosByCategoryLoaded: videosByCategoryLoaded(state),
  };
}

function mapDispatchToProps(dispatch) {
  const fetchMostPopularVideos = videoActions.mostPopular.request;
  const fetchVideoCategories = videoActions.categories.request;
  const fetchMostPopularVideosByCategory = videoActions.mostPopularByCategory.request;
  return bindActionCreators({fetchMostPopularVideos, fetchVideoCategories, fetchMostPopularVideosByCategory}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);