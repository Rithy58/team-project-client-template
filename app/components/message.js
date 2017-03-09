import React from 'react';
import ReactDOM from 'react-dom';

export default class message extends React.Component {
  render() {
    return (
      <p>message</p>
    );
  }
}

ReactDOM.render(<message />, document.getElementById('message'));
