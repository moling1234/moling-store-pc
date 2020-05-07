import React, { Component } from 'react';
import ReactDOm from 'react-dom';
import { helloWord } from './components/helloWord'

import './index.less';

class Index extends Component {
  render() {
    return (
      <div className="index-container">
        {helloWord} index.html1
      </div>
    )
  }
}

ReactDOm.render(
  <Index />,
  document.getElementById('root')
)
