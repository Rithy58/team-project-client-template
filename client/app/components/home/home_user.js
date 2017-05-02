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
            <h3 className="text-center">{ this.props.username }</h3>
            <img src="/img/user1.jpg" width="140px" height="140px" alt="avatar" className="img-circle center-block user-image" />
            <br />

            <h3>Looking for:</h3>
            <div className="media">
              <div className="media-left">
                <img className="media-object" src="/img/examplebook.jpg" alt="item"/>
              </div>
              <div className="media-body">
                <h4 className="media-heading">Title: Essentials of Marketing Research</h4>
                <ul className="list-group">
                  <li className="list-group-item">Author: Mary Wolfinbarger</li>
                  <li className="list-group-item">ISBN: 978-0073404820</li>
                  <li className="list-group-item">Price: $120</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p>
          <button className="btn btn-lg btn-primary btn-block" onClick={(e) => this.props.logout(e)}>Logout</button>
        </p>
      </div>
    );
  }
}
