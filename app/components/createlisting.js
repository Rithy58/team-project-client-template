import React from 'react';

import YourItem from './listingyouritem.js';
import SearchItem from './listingsearchitem.js'
import ListingInfo from './listinginfo.js'
import Navbar from './navbar.js';

export default class CreateListing extends React.Component {
  render() {
    return (
      <div className="container1">
      <Navbar />
      <div className="container enterc">
        <div className="row">

          <YourItem>
            <ListingInfo />
          </YourItem>

          <div className="col-md-1">
          </div>

          <SearchItem>
            <ListingInfo />
          </SearchItem>

          </div>
          <div className="row">
            <div className="col-md-5"></div>
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <span className="pull-right">
                <button type="submit" className="btn btn-sm">Submit</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
