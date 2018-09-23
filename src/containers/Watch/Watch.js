import React from 'react';
import './Watch.css';
import {VideoPreview} from '../../components/VideoPreview/VideoPreview';

export class Watch extends React.Component {
  render() {
    return (
      <React.Fragment>
        <VideoPreview horizontal={true}/>
        <VideoPreview />
      </React.Fragment>
    );
  }
}