import React from 'react';

export default class Matched_User_Item extends React.Component {
	render() {
		return (
			<div className="media">
				<div className="media-left">
					<img className="media-object" src={ this.props.img } alt="item"/>
				</div>
				<div className="media-body">
					<h4 className="media-heading">{ this.props.name }</h4>
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
