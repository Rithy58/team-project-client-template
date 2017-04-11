import React from 'react';

export default class Userprofile_Item extends React.Component {
  render() {
    return (

        <div className="media">
          <div className="media-left">
            <img className="media-object" src={this.props.pic}/>
          </div>
          <div className="media-body">
            <h4 className="media-heading">{this.props.title}</h4>
            <ul className="list-group">
              { this.props.details.map((detail, index) =>
                <li className="list-group-item" key={ index }>{ detail }</li>
              )}
            </ul>
          </div>
      </div>

    )
  }
}
