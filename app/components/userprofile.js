import React from 'react';

import Userprofile_Sidebar from './userprofile_sidebar.js'
import Userprofile_Panel from './userprofile_panel.js';
import Navbar from './navbar.js';

export default class Userprofile extends React.Component {
  render() {
    return (
      <div className="container">
      <div className="row-profile">
        <Navbar/>
        <Userprofile_Sidebar
          author="JEREMY LEE"
          title="Founder of uBarter"
          avatar="img/avatar.png"
          />
        <Userprofile_Panel />

      </div>
      </div>


    )
  }
}
