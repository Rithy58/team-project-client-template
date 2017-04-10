import React from 'react';
import {Link} from 'react-router';
export default class Home_Side_Bar extends React.Component {
  render() {
    return (
      <div className="col-md-3 side-bar">
        <Link to={"/profile/"}><img className="img-circle user-image"  src={this.props.pic} alt="Cinque Terre" width="175" height="175"/></Link>
        <div className="postings">
          {this.props.name}
        </div>
        {React.Children.map(this.props.children, function(child) {
            return (
              <div>
              {child}
              <br />
              </div>
            )
          })}
    </div>
    )
  }
}
