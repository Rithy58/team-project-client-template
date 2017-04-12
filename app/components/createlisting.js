import React from 'react';

import YourItem from './listingyouritem.js';
import SearchItem from './listingsearchitem.js'
import ListingInfo from './listinginfo.js'
import Navbar from './navbar.js';
import {postItem, postListing} from '../server';
//import {Link} from 'react-router';

export default class CreateListing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "listings": {
        "owner": 1,
        "want": [],
        "has": []
      },
      "items": {
        "theirs": {
          "ypicture": "",
          "ysubject": "CS",
          "yisbnValue": '',
          "yclassN": 187
        },
        "yours": {
          "tpicture": "",
          "tsubject": "CS",
          "tisbnValue": "",
          "tclassN": 187
        }
      }
    };

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
          this.setState({yclassN: value});
          break;
      default:
          break;
      }
      //console.log(this.state.yclassN);
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

    postItem(this.state.ypicture, this.state.ysubject, this.state.yisbnValue, this.state.yclassN, (yitem) => {
      this.setState({has: yitem});
    });

    postItem(this.state.tpicture, this.state.tsubject, this.state.tisbnValue, this.state.tclassN, (titem) => {
      this.setState({want: titem});
    });

    postListing(this.state.owner, this.state.want, this.state.has);

    //console.log(this.state.want);
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
            <button type="submit" className="btn borderbtn btn-sm createlistingsubmitbutton" onClick={(e) => this.handleSubmit(e)} >Submit</button>
          </span>
        </div>

          </div>

        </div>
      </div>
    </div>
    )
  }
}
