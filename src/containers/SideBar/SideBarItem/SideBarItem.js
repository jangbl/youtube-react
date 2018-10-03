import React from 'react';
import {Icon, Menu} from "semantic-ui-react";
import './SideBarItem.scss';

export function SideBarItem(props) {
  // React will ignore custom boolean attributes, therefore we pass a string
  // we use this attribute in our SCSS for styling
  const highlight = props.highlight ? 'highlight-item' : null;
  return (
      <Menu.Item className={['sidebar-item', highlight].join(' ')}>
        <div className='sidebar-item-alignment-container'>
          <span><Icon size='large' name={props.icon}/> </span>
          <span>{props.label}</span>
        </div>
      </Menu.Item>
  );
}