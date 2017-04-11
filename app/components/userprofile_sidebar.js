import React from 'react';

export default class Userprofile_Sidebar extends React.Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="profile-sidebar">

          <div className="profile-userpic text-center">
            <img src={this.props.avatar} alt="avatar" className="img-circle center-block" width="140" height="140" />
          </div>

          <div className="profile-usertitle">
            <div className="profile-usertitle-name">
              <h3 className="text-center">{this.props.author}</h3>
            </div>
            <div className="profile-usertitle-job">
              <h4>{this.props.title}</h4>
            </div>
          </div>

          <div className="profile-userbuttons">
            <button type="button" className="btn btn-sm">
              Edit Profile
            </button>
          </div>

          <div className="profile-usermenu">
            <ul className="nav">
              <li className="active">
                <a href="#">
                  <i className="glyphicon glyphicon-th-list"></i>
                  My Listings </a>
              </li>
              <li>
                <a href="../../build/message.html">
                <i className="glyphicon glyphicon-ok"></i>
                Matches </a>
              </li>
            </ul>
          </div>

        </div>
      </div>


    )
  }
}
