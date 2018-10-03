import React from 'react';
import './Rating.scss';
import {Icon, Progress} from "semantic-ui-react";

export function Rating(props) {
  const progress = props.likes && props.dislikes ? <Progress className='progress' percent={91} size='tiny'/> : null;
  return (
    <div className='rating'>
      <div className='thumbs-up'>
        <Icon name='thumbs outline up'/>
        <span>{props.likes}</span>
      </div>
      <div className='thumbs-down'>
        <Icon name='thumbs outline down'/>
        <span>{props.dislikes}</span>
      </div>
      {progress}
    </div>
  );
}