import React from 'react';

export default class Userprofile_Sidebar extends React.Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="profile-sidebar">

          <div className="profile-userpic text-center">
            <img src="img/avatar.png" alt="avatar" className="img-circle center-block" width="140" height="140" />
          </div>

          <div className="profile-usertitle">
            <div className="profile-usertitle-name">
              <h3 className="text-center">JEREMY LEE</h3>
            </div>
            <div className="profile-usertitle-job">
              <h4>Founder of uBarter</h4>
            </div>
          </div>

          <div className="profile-userbuttons">
            <button type="button" className="btn btn-sm">
              Edit Profile
            </button>
          </div>
          <div>
            <h6> </h6>
          </div>
          <div className="profile-userbuttons">
            <button type="button" className="btn btn-sm">
                <i className="glyphicon glyphicon-wrench"></i>
                Account Settings
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
                <a href="#">
                <i className="glyphicon glyphicon-ok"></i>
                Matches </a>
              </li>
              <li>
                <a href="#">
                <i className="glyphicon glyphicon-flag"></i>
                Help </a>
              </li>
            </ul>
          </div>

        </div>
      </div>


    )
  }
}
