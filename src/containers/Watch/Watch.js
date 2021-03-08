import React from 'react';
import {bindActionCreators} from 'redux';
import * as watchActions from '../../store/actions/watch';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getYoutubeLibraryLoaded} from '../../store/reducers/api';
import WatchContent from './WatchContent/WatchContent';
import {getSearchParam} from '../../services/url';
import {getChannelId} from '../../store/reducers/videos';
import {getCommentNextPageToken} from '../../store/reducers/comments';
import * as commentActions from '../../store/actions/comment';
import axios from 'axios'

export class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video_start: 5,
      video_end: 10,
    };
  }

  render() {
    const videoId = this.getVideoId();
    // console.log('video ID in watch component: ' + videoId);
    // items: Tuple[name, ranges]
    // ranges: List[Tuple[start_frame, end_frame]]
    return (
      <div>
        {/*<div>{this.state.bookmarks & this.state.bookmarks | 'loading'}</div>*/}
        <WatchContent videoId={videoId} channelId={this.props.channelId}
                      bottomReachedCallback={this.fetchMoreComments}
                      nextPageToken={this.props.nextPageToken}/>
      </div>
    );
  }

  componentDidMount() {
    if (this.props.youtubeLibraryLoaded) {
      this.fetchWatchContent();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
      this.fetchWatchContent();
    }
  }

  getVideoId = () => {
    return getSearchParam(this.props.location, 'v');
  }

  // from: https://gist.github.com/jrtaylor-com/42883b0e28a45b8362e7
  youtubeDurationToSeconds(duration) {
    let hours   = 0;
    let minutes = 0;
    let seconds = 0;

    // Remove PT from string ref: https://developers.google.com/youtube/v3/docs/videos#contentDetails.duration
    duration = duration.replace('PT','');

    // If the string contains hours parse it and remove it from our duration string
    if (duration.indexOf('H') > -1) {
      const hours_split = duration.split('H');
      hours       = parseInt(hours_split[0]);
      duration    = hours_split[1];
    }

    // If the string contains minutes parse it and remove it from our duration string
    if (duration.indexOf('M') > -1) {
      const minutes_split = duration.split('M');
      minutes       = parseInt(minutes_split[0]);
      duration      = minutes_split[1];
    }

    // If the string contains seconds parse it and remove it from our duration string
    if (duration.indexOf('S') > -1) {
      const seconds_split = duration.split('S');
      seconds       = parseInt(seconds_split[0]);
    }

    return (hours * 60 * 60) + (minutes * 60) + seconds;
  }

  fetchWatchContent = () => {
    const videoId = this.getVideoId();
    if (!videoId) {
      this.props.history.push('/');
    }
    this.props.fetchWatchDetails(videoId, this.props.channelId);
  }

  fetchMoreComments = () => {
    if (this.props.nextPageToken) {
      this.props.fetchCommentThread(this.getVideoId(), this.props.nextPageToken);
    }
  };

  change_timestamp = seconds => {
    alert(seconds);
  }

}

function mapStateToProps(state, props) {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
    channelId: getChannelId(state, props.location, 'v'),
    nextPageToken: getCommentNextPageToken(state, props.location),
  };
}

function mapDispatchToProps(dispatch) {
  const fetchWatchDetails = watchActions.details.request;
  const fetchCommentThread = commentActions.thread.request;
  return bindActionCreators({fetchWatchDetails, fetchCommentThread}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Watch));