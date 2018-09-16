import React, {Component} from 'react';
import {Home} from './containers/Home/Home';
import {AppLayout} from './components/AppLayout/AppLayout';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Home/>
      </AppLayout>
    );
  }
}

export default App;
