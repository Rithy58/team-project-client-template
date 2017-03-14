import React from 'react';

import Matched_User_Item from './matched_user_item.js';

export default class Matched_User extends React.Component {
  render() {
    return (
      <div className="col-md-6">
        <img src={ this.props.avatar } width="140px" height="140px" alt="avatar" className="img-circle center-block" />
        <h3 className="text-center">{ this.props.username }</h3>
        <Matched_User_Item />
      </div>
    )
  }
}
