import React from 'react';
import {Link} from 'react-router-dom';
export default class Message_Main_User extends React.Component {
  render() {
    return (
      <div className="media">
        <span className="user1-img pull-left">
          <img src={this.props.avatar } alt="avatar" className="img-circle user-image" height="45"/>
        </span>

        <div className="media-body">
          <Link to={"/profile"}>{this.props.author}</ Link>
          <br />
          {this.props.message}
          <br />

          <p className= "timestamp pull-right">
            <span className="glyphicon glyphicon-time"></span>{this.props.timestamp}
          </p>
        </div>
       </div>

  )
}
}
