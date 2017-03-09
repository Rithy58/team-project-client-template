import React from 'react';
import ReactDOM from 'react-dom';

export default class home extends React.Component {
  render() {
    return (
      <p>Home</p>
    )
  }
}

ReactDOM.render(<home />, document.getElementById('home'));
