import React from 'react';
import {Icon, Image, Menu} from "semantic-ui-react";
import './Subscription.scss';

export function Subscription(props) {

  let rightElement = null;
  const {broadcasting, amountNewVideos} = props;
  if (broadcasting) {
    rightElement = <Icon name='signal'/>;
  } else if (amountNewVideos) {
    rightElement = <span className='new-videos-count'>{amountNewVideos}</span>;
  }

  return (
    <Menu.Item>
      <div className='subscription'>
        <div>
          <Image src='http://via.placeholder.com/28x28' avatar/>
          <span>{props.label}</span>
        </div>
        {rightElement}
      </div>
    </Menu.Item>
  );
}