import React from 'react';

export default class Home_Item extends React.Component {
  render() {
    return (
      <div className="media">
				<div className="media-left">
					<img className="media-object" src="/img/examplebook.jpg" alt="item"/>
				</div>
				<div className="media-body">
					<h4 className="media-heading">{ this.props.title }</h4>
					<ul className="list-group">
            <li className="list-group-item">{ this.props.author }</li>
            <li className="list-group-item">{ this.props.isbn }</li>
            <li className="list-group-item">{ this.props.price }</li>
					</ul>
				</div>
			</div>
    )
  }
}
