import React from 'react';
import './Home.scss';

import {SideBar} from '../SideBar/SideBar';
import {HomeContent} from './HomeContent/HomeContent';

export class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SideBar/>
        <HomeContent/>
      </React.Fragment>
    );
  }
}