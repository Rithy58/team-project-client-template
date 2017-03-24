import React from 'react';

import Userprofile_Sidebar from './userprofile_sidebar.js'
import Userprofile_Panel from './userprofile_panel.js';

export default class Userprofile extends React.Component {
  render() {
    return (
      <div className="container">
      <div className="row-profile">
        <Userprofile_Sidebar />
        <Userprofile_Panel />

      </div>
      </div>


    )
  }
}
