import React from 'react';
import Userprofile_Item from './userprofile_item.js'

export default class Userprofile_Panel extends React.Component {
  render() {
    return (
    <div className="col-md-9 profile">
      <div className="panel-body"><span className="panel-block">TEXTBOOKS I OWN</span>
        <span className="profile-userbuttons">
        <button type="button" className="btn btn-sm pull-right">
            <span className="glyphicon glyphicon-pencil"></span>
            Edit Listing
          </button>
        </span>
        <Userprofile_Item
          pic="img/examplebook.jpg"
          title="Essentials of Marketing Research"
          author="Joseph F. Hair, Jr."
          edition="3rd Edition"
          isbn="978-0-07-802881"
          publisher="The McGraw-Hill Companies, Inc."
          />

      </div>
      <br />
      <div className="panel-body"><span className="panel-block">TEXTBOOKS I NEED</span>
        <span className="profile-userbuttons">
        <button type="button" className="btn btn-sm pull-right">
            <span className="glyphicon glyphicon-pencil"></span>
            Edit Listing
          </button>
        </span>
        <Userprofile_Item
          pic="img/examplebook2.jpg"
          title="The Official Guide to the GRE revised General Test"
          author="N/A"
          edition="2nd Edition"
          isbn="978-0-07-179123-6"
          publisher="Educational Testing Service"
          />
      </div>
    </div>

    )
  }
}
