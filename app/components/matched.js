import React from 'react';
import ReactDOM from 'react-dom';

export default class matched extends React.Component {
  render() {
    return (
      <p>Matched</p>
    )
  }
}

ReactDOM.render(<matched />, document.getElementById('matched'));
