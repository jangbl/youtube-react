import React, {Component} from 'react';
import HeaderNav from './containers/HeaderNav/HeaderNav';
import {SideBar} from './containers/SideBar/SideBar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderNav/>
        <SideBar/>
      </React.Fragment>
    );
  }
}

export default App;
