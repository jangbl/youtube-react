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
    this.state = {};
  }
  render() {
    const videoId = this.getVideoId();
    // console.log('video ID in watch component: ' + videoId);
    // items: Tuple[name, ranges]
    // ranges: List[Tuple[start_frame, end_frame]]
    const bookmarks = this.state.bookmarks? Object.entries(this.state.bookmarks).map((item, i) =>
      <div key={i}>{item[0]}
        {item[1].map(range =>
            <button onClick={() => this.change_timestamp(range[0])}>
              {range[0]} - {range[1]}
            </button>
        )}
      </div>
    ) : null;
    return (
        <div>
          <div>{bookmarks}</div>
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
    this.fetchBookmarks(this.getVideoId());
    console.log('fetched bookmarks');
  }

  componentDidUpdate(prevProps) {
    if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
      this.fetchWatchContent();
    }
  }

  getVideoId = () => {
    return getSearchParam(this.props.location, 'v');
  }

  fetchBookmarks = videoID => {
    // note: POST request causes CORS prob
    axios.get('http://127.0.0.1:5000/bookmarks', {
      params: {
        videoID,
        object_name: null,
      }
    }).then(response => {
      console.log(JSON.stringify(response.data));
      this.setState({bookmarks: response.data});
    });
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