import React from 'react';
import ReactDOm from 'react-dom';

class Search extends React.Component {
  render() {
    return (
      <div>
        Search Text
      </div>
    )
  }
}

ReactDOm.render(
  <Search />,
  document.getElementById('root')
)
