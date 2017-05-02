import React from 'react';

export default class Home_User extends React.Component {
  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            Welcome back, {this.props.username}!
          </div>
          <div className="panel-body">
            <img src="/img/user1.jpg" width="140px" height="140px" alt="avatar" className="img-circle center-block user-image" />
          </div>
        </div>
        <p>
          <button className="btn btn-lg btn-primary btn-block" onClick={(e) => this.props.logout(e)}>Logout</button>
        </p>
      </div>
    );
  }
}
