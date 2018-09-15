import React from 'react';
import {VideoPreview} from '../../components/VideoPreview/VideoPreview';
import './Home.css';

export class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <VideoPreview vertical={true} grid={true}/>
      </div>
    );
  }
}