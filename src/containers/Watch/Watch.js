import React from 'react';
import './Watch.css';
import {RelatedVideos} from '../../components/RelatedVideos/RelatedVideos';
import {Video} from '../../components/Video/Video';
import {VideoMetadata} from '../../components/VideoMetadata/VideoMetadata';
import {VideoInfoBox} from '../../components/VideoInfoBox/VideoInfoBox';

export class Watch extends React.Component {
  // stretch?
  render() {
    return (
      <div className='watch-grid'>
        <Video className='video' id='MHTXEACrjFM'/>
        <VideoMetadata viewCount={1000}/>
        <VideoInfoBox/>
        <RelatedVideos className='relatedVideos'/>
      </div>
    );
  }
}