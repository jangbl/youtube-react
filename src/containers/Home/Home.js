import React from 'react';
import {VideoPreview} from '../../components/VideoPreview/VideoPreview';

export class Home extends React.Component {
  render() {
    return (
      <div style={{padding: '400px'}}>
        <VideoPreview vertical={true} grid={true}/>
      </div>
    )
  }
}