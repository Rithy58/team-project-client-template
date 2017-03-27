import React from 'react';

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
            <img src="img/ubarter-trans.png" alt="uBarter" width="180" height="40" />

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
    </div>
    )
  }
}
