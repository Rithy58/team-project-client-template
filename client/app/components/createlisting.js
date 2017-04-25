import React from 'react';

import YourItem from './listingyouritem.js';
import SearchItem from './listingsearchitem.js'
import ListingInfo from './listinginfo.js'
import Navbar from './navbar.js';
import {postListing} from '../server';
import { withRouter, browserHistory } from 'react-router-dom';

export default class CreateListing extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      "owner": 1,
      "want": 1,
      "has": 1,
      "ypicture": '',
      "ysubject": "CS",
      "yisbnValue": '',
      "yclassN": 187,
      "tpicture": '',
      "tsubject": "CS",
      "tisbnValue": '',
      "tclassN": 187
    }

    this.handleYChange = this.handleYChange.bind(this);
    this.handleTChange = this.handleTChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //handleChange

  handleYChange(cat, value) {
    switch (cat) {
      case "isbn":
        this.setState({yisbnValue: value});
        break;
      case "subject":
        this.setState({ysubject: value});
        break;
      case "classN":
        this.setState({yisbnValue: value});
        break;
      default:
        break;
      }
  }

  handleTChange(cat, value){
    if(cat == 'isbn') {
      this.setState({tisbnValue: value});
    }
    else if(cat == 'subject') {
      this.setState({tsubject: value});
    }
    else {
      this.setState({tclassN: value});
    }

  }

  handleSubmit(clickEvent){
    clickEvent.preventDefault();

    /*postItem(this.state.ypicture, this.state.ysubject, this.state.yisbnValue, this.state.yclassN, (yy) => {
      this.setState({has: yy});
    });

    postItem(this.state.tpicture, this.state.tsubject, this.state.tisbnValue, this.state.tclassN, (tt) => {
      this.setState({want: tt});
    });*/

    postListing(this.state.owner, this.state.ysubject, this.state.yisbnValue, this.state.yclassN, this.state.tsubject, this.state.tisbnValue, this.state.tclassN);
    browserHistory.push('/');
  }

  render() {
    return (
      <div>
      <Navbar />
      <div className="container1">
      <div className="container enterc">
        <div className="row">
          <div className="col-md-9">
          <YourItem>
            <ListingInfo name="yours" handleFormChange={this.handleYChange}/>
          </YourItem>
          </div>


          <div className="col-md-3">
          <SearchItem>
            <ListingInfo name="theirs" handleFormChange={this.handleTChange}/>
          </SearchItem>
          <span>

            <button type="submit" className="btn borderbtn btn-sm createlistingsubmitbutton" onClick={(e) => this.handleSubmit(e)} >
              Submit
            </button>
          </span>
        </div>

          </div>

        </div>
      </div>
    </div>
    )
  }
}
