import React from 'react';
import './AppLayout.css';
import HeaderNav from '../../containers/HeaderNav/HeaderNav';

export function AppLayout(props) {
  return (
      <div className='app-layout'>
        <HeaderNav/>
        {props.children}
      </div>
  );
}