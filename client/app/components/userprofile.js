import React from 'react';

import Userprofile_Sidebar from './userprofile/userprofile_sidebar.js'
import Userprofile_Panel from './userprofile/userprofile_panel.js';
import Navbar from './navbar.js';
import {getProfileData} from '../server.js';

export default class Userprofile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "user": {},
      "saleitem":[]
    };
  }

  componentDidMount() {
    getProfileData(3, (feedData) =>{
      this.setState(feedData);
    });
  }

  render() {
    return (
      <div className="container">
      <div className="row-profile">
        <Navbar/>
        <Userprofile_Sidebar
          author={this.state.user.username}
          avatar="img/avatar.png"
          />
        <Userprofile_Panel />

      </div>
      </div>


    )
  }
}
