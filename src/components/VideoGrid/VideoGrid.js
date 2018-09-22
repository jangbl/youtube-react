import React from 'react';
import './VideoGrid.css';
import {VideoGridHeader} from "./VideoGridHeader/VideoGridHeader";
import {Divider} from "semantic-ui-react";
import {VideoPreview} from '../VideoPreview/VideoPreview';

export function VideoGrid(props) {
  const divider = props.hideDivider ? null : <Divider/>;
  return (
    <div className='video-section'>
      <VideoGridHeader title='Trending'/>
      <div className='video-grid'>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
      </div>
      {divider}
    </div>
  );
}