import React from 'react';
import {Link} from 'react-router';

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-fixed-top navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <h6/>
            <Link to="/">
              <img src="img/ubarter-trans.png" alt="uBarter" width="180" height="40" />
            </Link>
            <h6/>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <form className="navbar-form navbar-left" role="search">

              <div className="input-group ubarter-search">
                <input type="text" className="form-control nav-search" placeholder="Search Textbooks!"/>
                <span className="input-group-btn">
                  <button type="submit" className="btn nav-btn btn-default">
                    <span className="glyphicon glyphicon-search ubarter-green"></span>
                  </button>
                </span>
              </div>
            </form>
            <ul className="nav navbar-nav navbar-right"/>


          </div>
        </div>
      </nav>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/message">Message</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/matched/1">Matched ID: 1</Link></li>
          <li><Link to="/listing/create">Create Listing</Link></li>
        </ul>
      </nav>
    </div>
    )
  }
}
