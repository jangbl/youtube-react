import React from 'react';
import {Button, Icon} from "semantic-ui-react";
import './CommentsHeader.scss';

export function CommentsHeader(props) {
  return (
    <div className='comments-header'>
      <h4>{props.amountComments} Comments</h4>
      <Button basic compact icon labelPosition='left'>
        <Icon name='align left' />
        Sort by
      </Button>
    </div>
  );
}