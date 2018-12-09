import React from 'react';
import './NextUpVideo.scss';
import {Checkbox, Divider} from "semantic-ui-react";
import {VideoPreview} from '../../VideoPreview/VideoPreview';

export function NextUpVideo(props) {
  return (
    <React.Fragment>
      <div className='next-up-container'>
        <h4>Up next</h4>
        <div className='up-next-toggle'>
          <span>Autoplay</span>
          <Checkbox toggle defaultChecked/>
        </div>
      </div>
      <VideoPreview horizontal={true} video={props.video} pathname='/watch' search={`?v=${props.video.id}`}/>
      <Divider/>
    </React.Fragment>
  );
}