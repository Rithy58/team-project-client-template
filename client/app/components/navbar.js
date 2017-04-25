import React from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        value: ""
      };
    }

    handleKeyUp(e) {
      if (e.key === "Enter") {
        // Prevent the event from "bubbling" up the DOM tree.
        e.preventDefault();
        var comment = this.state.value.trim();
        if (comment !== "") {
          // Post comment - send to Search
          this.props.onSearch(this.state.value);
          this.setState({value: ""});
        }
      }
    }

     /**
      * Called when the user types a character into the status update box.
      * @param e An Event object.
      */
      handleChange(e) {
        // Prevent the event from "bubbling" up the DOM tree.
        e.preventDefault();
        this.setState({value: e.target.value});
      }

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
            <div className="navbar-form navbar-left" role="search">

              <div className="input-group ubarter-search">
                <input type="text" className="form-control nav-search" placeholder="Search Textbooks!"
                  value={this.state.value} onChange={(e) => this.handleChange(e)}
                  onKeyUp={(e) => this.handleKeyUp(e)} />
                <span className="input-group-btn">
                  <button type="submit" className="btn nav-btn btn-default">
                    <span className="glyphicon glyphicon-search ubarter-green"></span>
                  </button>
                </span>
              </div>
            </div>
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
