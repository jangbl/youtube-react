import React from 'react';
import {CommentsHeader} from "./CommentsHeader/CommentsHeader";
import {AddComment} from "./AddComment/AddComment";
import {UserComment} from "./UserComment/UserComment";

export class Comments extends React.Component {
  render() {
    return(
      <div>
        <CommentsHeader amountComments={this.props.amountComments}/>
         <AddComment key='add-comment'/>
        {/* <UserComment/>
        <UserComment/>
        <UserComment/> */}
      </div>
    );
  }
}