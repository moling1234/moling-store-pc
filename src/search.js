import React from 'react';
import ReactDOm from 'react-dom';
import './search.less';

class Search extends React.Component {
  render() {
    return (
      <div className="search-text">
        Search Text
      </div>
    )
  }
}

ReactDOm.render(
  <Search />,
  document.getElementById('root')
)
