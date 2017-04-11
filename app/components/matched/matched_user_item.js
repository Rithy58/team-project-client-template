import React from 'react';

export default class Matched_User_Item extends React.Component {
	render() {
		return (
			<div className="media">
				<div className="media-left">
					<img className="media-object" src="http://nancypearl.com/wp-content/uploads/2012/12/book-stack.gif" alt="item"/>
				</div>
				<div className="media-body">
					<h4 className="media-heading">{ this.props.title }</h4>
					<ul className="list-group">
            <li className="list-group-item">{ this.props.item.picture }</li>
						<li className="list-group-item">{ this.props.item.title }</li>
						<li className="list-group-item">{ this.props.item.isbn }</li>
						<li className="list-group-item">{ this.props.item.price }</li>
					</ul>
				</div>
			</div>
		)
	}
}
