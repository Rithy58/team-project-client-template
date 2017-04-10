import React from 'react';

export default class Home_Feed_Item extends React.Component {
  render() {
    return (

      <div className="books">
        <div className="media">
          <div className="media-left">
            <img className="media-object" src={this.props.pic}/>
          </div>
          <div className="media-body">
            <h4 className="media-heading">{this.props.title}</h4>
            <ul className="list-group">
              <li className="list-group-item">Author:  {this.props.author}</li>
              <li className="list-group-item">Edition: {this.props.edition}</li>
              <li className="list-group-item">ISBN: {this.props.isbn}</li>
              <li className="list-group-item">Publisher: {this.props.publisher}</li>
            </ul>
          </div>
      </div>
    </div>
    
    )
  }
}
