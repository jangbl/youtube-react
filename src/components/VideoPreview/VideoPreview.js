import React from 'react';
import {Image} from 'semantic-ui-react';
import './VideoPreview.css';

export class VideoPreview extends React.Component {
  render() {
    const isVertical = this.isPropertySet('vertical');
    const isGrid = this.isPropertySet('grid');

    return (
      <div className='video-preview'
           vertical={isVertical}
           grid={isGrid}>
        <div className='image-container'>
          <Image src='http://via.placeholder.com/210x118'/>
          <div className='time-label'>
            <span>05:22</span>
          </div>
        </div>

        <div className='video-info'>
          <div className='semi-bold show-max-two-lines'>Video title</div>
          <div className='video-preview-metadata-container'>
            <div className='channel-title'>Channel title</div>
            <div><span>2.1M views • 2 days ago</span></div>
          </div>
        </div>
      </div>
    );
  }

  isPropertySet(name) {
    // React will throw away custom boolean properties
    // so we have to return a string or null if the attribute is not there
    return this.props[name] ? 'true' : null;
  }
}