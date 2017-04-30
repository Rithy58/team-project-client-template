import React from 'react';

export default class Home_User extends React.Component {
  render() {
    return (
      <div>
        <p>
          Logged in as: {this.props.username}
        </p>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}
