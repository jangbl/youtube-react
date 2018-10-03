import React from 'react';
import './AppLayout.scss';
import HeaderNav from '../../containers/HeaderNav/HeaderNav';

export function AppLayout(props) {
  return (
      <div className='app-layout'>
        <HeaderNav/>
        {props.children}
      </div>
  );
}