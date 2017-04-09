import React from 'react';

import Matched_User from './matched/matched_user.js';
import Matched_User_Item from './matched/matched_user_item.js';
import {getMatchedData} from '../server.js';

export default class Matched extends React.Component {
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
                username='Rithy58'
                avatar='/img/user1.jpg'>
                <Matched_User_Item
                  img="/img/examplebook.jpg"
                  name="Example Textbook"
                  details={
                    ['Author: Tim Richard',
                    'Edition: 58th Edition',
                    'ISBN: 978 1123 33454',
                    'Publisher: PubPub, Inc']
                  }/>
            </Matched_User>
              <Matched_User
                username='Tommy'
                avatar='/img/user2.jpg'
              >
              <Matched_User_Item
                img="/img/examplebook2.jpg"
                name="Another Example Textbook"
                details={
                  ['Author: Tim Richard',
                  'Edition: 58th Edition',
                  'ISBN: 978 1123 33454',
                  'Publisher: PubPub, Inc']
                }/>
            </Matched_User>
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
