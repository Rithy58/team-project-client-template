import React from 'react';

import Matched_User from './matched/matched_user.js';
import {getMatchedData} from '../server.js';

export default class Matched extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "1": {
        "user": {
          "username": ""
        },
        "listing": {
          "want": [],
          "has": []
        }
      },
      "2": {
        "user": {},
        "listing": {
          "want": [],
          "has": []
        }
      }
    };
  }

  componentDidMount() {
    getMatchedData(this.props.params.id, 1, (feedData) => {
      this.setState(feedData);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-success match-panel">
          <div className="panel-heading">
            Match Found!
          </div>
          <div className="panel-body">
            <div className="row">
              <Matched_User
                username={this.state['1'].user.username}
                avatar='/img/user1.jpg'
                listing={this.state['1'].listing}
              />
              <Matched_User
                username={this.state['2'].user.username}
                avatar='/img/user2.jpg'
                listing={this.state['2'].listing}
              />
            </div>
            <br />
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="btn-group" role="group" aria-label="buttons">
                  <button type="button" className="btn btn-default">Previous</button>
                <button type="button" className="btn btn-default">
                    <span className="glyphicon glyphicon-comment" aria-hidden="true"></span> Contact
                  </button>
                  <button type="button" className="btn btn-default">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
