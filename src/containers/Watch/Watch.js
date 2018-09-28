import React from 'react';
import './Watch.css';
import {RelatedVideos} from '../../components/RelatedVideos/RelatedVideos';
import {Video} from '../../components/Video/Video';

export class Watch extends React.Component {
  // stretch?
  render() {
    return (
      <div className='watch-grid'>
        <Video className='video' id='MHTXEACrjFM'/>
        <div className='metadata' style={{width: '100%', height: '100px', background: '#F91112'}}>Metadata</div>
        <div className='comments' style={{width: '100%', height: '100px', background: '#F5A623'}}>comments</div>
        <RelatedVideos className='relatedVideos'/>
      </div>
    );
  }
}