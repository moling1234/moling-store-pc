import React from 'react';
import ReactDOm from 'react-dom';

import imgJpg from './assets/images/img.jpg'
import clearPng from './assets/icons/clear.png'

import './search.less';

class Search extends React.Component {
  render() {
    return (
      <div className="search-text">
        Search Text --watch121
        <img src={ imgJpg } alt=""/>
        <img src={ clearPng } alt=""/>
      </div>
    )
  }
}

ReactDOm.render(
  <Search />,
  document.getElementById('root')
)
