import React from 'react';
import {sendXHR} from '../services/xhr.js';

export default class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      created: 'false'
    };
  }

  createListing(data) {
    sendXHR('POST', '/api/listing/create', data, (xhr) => {
      if(xhr)
        this.setState({created: 'true'});
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.createListing({
      
    });
  }

  render() {
    return (
      <div>
        <p>
          This is Listing page!
          State: {this.state.created}
        </p>
        <button onClick={(e) => this.handleSubmit(e)}>Create Listing</button>
      </div>
    )
  }
}
