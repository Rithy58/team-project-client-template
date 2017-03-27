import React from 'react';

export default class Message_Sidebar_User extends React.Component {
  render() {
    return (
    <div>
      <div className= "chat-img pull-left">
        <img src={this.props.avatar } height="45px" alt="avatar" className="img-circle" />
      </div>

      <a href="#">{this.props.author}</a>
      <br />
      {this.props.timestamp}
      <span className="glyphicon glyphicon-comment pull-right"></span>
      <span className="badge pull-right">{this.props.numUnread}</span>
    </div>
    )
  }
}
