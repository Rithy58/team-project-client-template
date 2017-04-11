import React from 'react';

import YourItem from './listingyouritem.js';
import SearchItem from './listingsearchitem.js'
import ListingInfo from './listinginfo.js'
import Navbar from './navbar.js';

export default class CreateListing extends React.Component {
  render() {
    return (
      <div>
      <Navbar />
      <div className="container1">
      <div className="container enterc">
        <div className="row">
          <div className="col-md-9">
          <YourItem>
            <ListingInfo />
          </YourItem>
          </div>


          <div className="col-md-3">
          <SearchItem>
            <ListingInfo />
          </SearchItem>
          <span>
            <button type="submit" className="btn borderbtn btn-sm createlistingsubmitbutton">Submit</button>
          </span>
        </div>

          </div>

        </div>
      </div>
    </div>
    )
  }
}
