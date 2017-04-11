import React from 'react';

import Matched_User_Item from './matched_user_item.js';

export default class Matched_User extends React.Component {
  render() {
    return (
      <div className="col-md-6">
        <img src={ this.props.avatar } width="140px" height="140px" alt="avatar" className="img-circle center-block user-image" />
        <h3 className="text-center">{ this.props.username }</h3>
        <h4 className="text-center">Want</h4>
        {
          this.props.listing.want.map(
            (item, index) => {return (
              <Matched_User_Item item={item} key={index}/>
            )}
          )
        }
        <h4 className="text-center">Has</h4>
        {
          this.props.listing.has.map(
            (item, index) => {return (
              <Matched_User_Item item={item} key={index}/>
            )}
          )
        }
      </div>
    )
  }
}
