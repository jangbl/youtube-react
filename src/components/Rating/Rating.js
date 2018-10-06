import React from 'react';
import './Rating.scss';
import {Icon, Progress} from "semantic-ui-react";

export function Rating(props) {
  const progress = props.likes && props.dislikes ? <Progress percent={91} size='tiny'/> : null;
  return (
    <div className='rating'>
      <div >
        <Icon name='thumbs outline up'/>
        <span>{props.likes}</span>
      </div>
      <div >
        <Icon name='thumbs outline down'/>
        <span>{props.dislikes}</span>
      </div>
      {progress}
    </div>
  );
}