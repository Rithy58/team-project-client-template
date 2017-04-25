import React from 'react';
import Userprofile_Item from './userprofile_item.js'

export default class Userprofile_Panel extends React.Component {
  render() {
    return (
    <div className="col-md-9 profile">
      <div className="panel-body"><span className="panel-block">TEXTBOOKS I OWN</span>
        <span className="profile-userbuttons">
        <button type="button" className="btn btn-sm pull-right">
            Edit Listing
          </button>
        </span>

        <Userprofile_Item
          pic="img/examplebook.jpg"
          title="Essentials of Marketing Research"
          details={
            ['Author: Joseph F. Hair, Jr.',
            'Edition: 3rd Edition',
            'ISBN: 978-0-07-802881',
            'Publisher: The McGraw-Hill Companies, Inc.']
          }
          />

      </div>
      <br />
      <div className="panel-body"><span className="panel-block">TEXTBOOKS I NEED</span>
        <span className="profile-userbuttons">
        <button type="button" className="btn btn-sm pull-right">
            Edit Listing
          </button>
        </span>
        <br />
        <Userprofile_Item
          pic="img/examplebook2.jpg"
          title="The Official Guide to the GRE revised General Test"
          details={
            ['Author: N/A',
            'Edition: 2nd Edition',
            'ISBN: 978-0-07-179123-6',
            'Publisher: Educational Testing Service']
          }
          />
      </div>
    </div>

    )
  }
}
