import React from 'react';

export default class Search_Feed_Item extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-10">
          <div className="media">
            <div className="media-left media-top">
              <img src={this.props.pic} width="200" height="230">
              </img>
            </div>
            <div className="media-body">
              <a href="#">{this.props.title}</a>
              <br />By {this.props.author}
              <br />{this.props.location}
              <span className="glyphicon glyphicon-user"></span>
              <br/> <font color="#3b5998">Make an Offer</font>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <span className="pull-right"></span>
        </div>
      </div>
    )
  }
}
