import {VideoGrid} from '../../../components/VideoGrid/VideoGrid';
import React from 'react';
import './HomeContent.scss';

export class HomeContent extends React.Component {
  render() {
    return (
      <div className='home-content'>
        <div className="responsive-video-grid-container">
          <VideoGrid title='Trending'/>
          <VideoGrid title='Autos & Vehicles' hideDivider={true}/>
        </div>
      </div>
    );
  }
}