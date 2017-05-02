import React from 'react';
import {sendXHR} from '../services/xhr.js';

export default class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      created: false
    };
    this.createListing = this.createListing.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  createListing(data) {
    sendXHR('POST', '/api/listing/create', data, (xhr) => {
      if(xhr)
        this.refresh();
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.createListing({test: 'test'});
  }

  render() {
    return (
      <div>
        <p>
          This is Listing page!
        </p>
        <button onClick={this.handleSubmit}>Create Listing</button>
      </div>
    )
  }
}
