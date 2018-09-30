import React from 'react';
import './Rating.css';
import {Icon, Progress} from "semantic-ui-react";

export function Rating() {
  return (
    <div className='rating'>
      <div className='thumbs-up'>
        <Icon name='thumbs outline up'/>
        <span>1K</span>
      </div>
      <div className='thumbs-down'>
        <Icon name='thumbs outline down'/>
        <span>100</span>
      </div>
      <Progress className='progress' percent={91} size='tiny'/>
    </div>
  );
}