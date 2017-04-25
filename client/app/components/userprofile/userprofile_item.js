import React from 'react';

export default class Userprofile_Item extends React.Component {
  render() {
    return (
      <div className="books-spacing">
        <div className="media">
          <div className="media-left">
            <img className="media-object" src={this.props.pic}/>
          </div>
          <div className="media-body">
            <ul className="list-group">
              { this.props.details.map((detail, index) =>
                <li className="list-group-item" key={ index }>{ detail }</li>
              )}
            </ul>
          </div>
      </div>
    </div>

    )
  }
}
