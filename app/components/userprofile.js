import React from 'react';
import ReactDOM from 'react-dom';

export default class userprofile extends React.Component {
  render() {
    return (
      <p>User Profile</p>
    )
  }
}

ReactDOM.render(<userprofile />, document.getElementById('userprofile'));
