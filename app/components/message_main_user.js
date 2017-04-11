import React from 'react';

export default class Message_Main_User extends React.Component {
  render() {
    return (
      <div className="media">
        <span className="user1-img pull-left">
          <img src={this.props.avatar } alt="avatar" className="img-circle user-image" height="45"/>
        </span>

        <div className="media-body">
          <a href="#">{this.props.author}</a>
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
