import React from 'react';
import './Watch.css';
import {RelatedVideos} from '../../components/RelatedVideos/RelatedVideos';
import {Video} from '../../components/Video/Video';
import {VideoMetadata} from '../../components/VideoMetadata/VideoMetadata';
import {VideoInfoBox} from '../../components/VideoInfoBox/VideoInfoBox';
import {Comments} from '../Comments/Comments';

export class Watch extends React.Component {
  render() {
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
}