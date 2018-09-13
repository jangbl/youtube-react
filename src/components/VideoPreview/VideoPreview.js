import React from 'react';
import {Image} from 'semantic-ui-react';
import './VideoPreview.css';

export class VideoPreview extends React.Component {
  render() {
    const isHorizontal = this.isPropertySet('horizontal');
    const isVertical = this.isPropertySet('vertical');
    const isGrid = this.isPropertySet('grid');
    const isExpanded = this.isPropertySet('expanded');

    return (
      <div className='video-preview'
           horizontal={isHorizontal}
           vertical={isVertical}
           grid={isGrid}
           expanded={isExpanded}>
        <div className='image-container'>
          <Image src='http://via.placeholder.com/210x118'/>
          <div className='time-label'>
            <span>05:22</span>
          </div>
        </div>

        <div className='video-info'>
          <div className='semi-bold show-max-two-lines' expanded={isExpanded}>Video title</div>
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