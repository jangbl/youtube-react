import React from 'react';
import {Image} from 'semantic-ui-react';
import './VideoPreview.scss';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import {getShortNumberString} from '../../services/number/number-format';
import {getVideoDurationString} from '../../services/date/date-format';

TimeAgo.locale(en);
const timeAgo = new TimeAgo('en-US');

export class VideoPreview extends React.Component {
  render() {
    const {video} = this.props;
    if (!video) {
      return <div/>;
    }
    const videoDuration = getVideoDurationString(video.contentDetails.duration);
    const viewAndTimeString = VideoPreview.getFormattedViewAndTime(video);
    const horizontal = this.props.horizontal ? 'horizontal' : null;
    return (
      <div className={['video-preview', horizontal].join(' ')}>
        <div className='image-container'>
          <Image src={video.snippet.thumbnails.medium.url}/>
          <div className='time-label'>
            <span>{videoDuration}</span>
          </div>
        </div>

        <div className='video-info'>
          <div className='semi-bold show-max-two-lines'>{video.snippet.title}</div>
          <div className='video-preview-metadata-container'>
            <div className='channel-title'>{video.snippet.channelTitle}</div>
            <div><span>{viewAndTimeString}</span></div>
          </div>
        </div>
      </div>
    );
  }

  static getFormattedViewAndTime(video) {
    const publicationDate = new Date(video.snippet.publishedAt);
    const viewCountShort = getShortNumberString(video.statistics.viewCount);
    return `${viewCountShort} views • ${timeAgo.format(publicationDate)}`;
  }
}