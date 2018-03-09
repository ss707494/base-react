import React, { Component } from 'react';
import './App.less';
import { Button } from 'antd';
import {initRoute} from './components/baseRoute/index.js'

class App extends Component {
  render() {
    return initRoute();
  }
}

export default App;
