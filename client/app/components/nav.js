import React from 'react';
import {
  Link, NavLink
} from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-fixed-top navbar-default">

        <div className="container">
          <div className="navbar-header">
            <Link to="/">
              <img src="img/ubarter-trans.png" alt="uBarter" width="180" height="40" />
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <div className="navbar-form navbar-left" role="search">
              <div className="input-group ubarter-search">
                <input type="text" className="form-control nav-search" placeholder="Search Textbooks!"/>
                <span className="input-group-btn">
                  <button type="submit" className="btn nav-btn btn-default">
                    <span className="glyphicon glyphicon-search ubarter-green"></span>
                  </button>
                </span>
              </div>
            </div>

            <ul className="nav navbar-nav navbar-right">
                <li><NavLink exact to="/" activeClassName="activeNav">Home</NavLink></li>
                <li><NavLink to="/message" activeClassName="activeNav">Message</NavLink></li>
                <li><NavLink to="/profile" activeClassName="activeNav">Profile</NavLink></li>
                <li><NavLink to="/search" activeClassName="activeNav">Search</NavLink></li>
                <li><NavLink to="/listing" activeClassName="activeNav">Listing</NavLink></li>
            </ul>
          </div>

        </div>
      </nav>
    )
  }
}
