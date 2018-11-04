import React from 'react';
import './Watch.scss';
import {RelatedVideos} from '../../components/RelatedVideos/RelatedVideos';
import {Video} from '../../components/Video/Video';
import {VideoMetadata} from '../../components/VideoMetadata/VideoMetadata';
import {VideoInfoBox} from '../../components/VideoInfoBox/VideoInfoBox';
import {Comments} from '../Comments/Comments';
import {bindActionCreators} from 'redux';
import * as watchActions from '../../store/actions/watch';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getYoutubeLibraryLoaded} from '../../store/reducers/api';


export class Watch extends React.Component {
  render() {
    console.log(this.getVideoId());

    return (
      <div className='watch-grid'>
        <Video className='video' id='J2X5mJ3HDYE'/>
        <VideoMetadata viewCount={1000}/>
        <VideoInfoBox/>
        <Comments amountComments={112499}/>
        <RelatedVideos className='relatedVideos'/>
      </div>
    );
  }

  componentDidMount() {
    if (this.props.youtubeLibraryLoaded) {
      this.fetchWatchContent();
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
      this.fetchWatchContent();
    }
  }

  getVideoId() {
    if (!this.props.location) {
      console.log('[Watch] this.props.location is null');
      return null;
    }

    const searchParams = new URLSearchParams(this.props.location.search);
    return searchParams.get('v');
  }

  fetchWatchContent() {
    const videoId = this.getVideoId();
    if(!videoId) {
      this.props.history.push('/');
    }
    this.props.fetchWatchDetails(videoId, this.props.channelId);
  }
}

function mapStateToProps(state) {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
  };
}

function mapDispatchToProps(dispatch) {
  const fetchWatchDetails = watchActions.details.request;
  return bindActionCreators({fetchWatchDetails}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Watch));