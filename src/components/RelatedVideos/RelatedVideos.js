import React from 'react';
import {VideoPreview} from '../VideoPreview/VideoPreview';
import './RelatedVideos.scss';
import {NextUpVideo} from './NextUpVideo/NextUpVideo';

export function RelatedVideos(props) {
  return (
    <div className='related-videos'>
      <NextUpVideo/>
      <VideoPreview horizontal={true}/>
      <VideoPreview horizontal={true}/>
      <VideoPreview horizontal={true}/>
    </div>
  );
}