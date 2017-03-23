import React from 'react';

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
        <div className="media">
        <div className="media-left">
          <img className="media-object" src="img/examplebook.jpg" alt="Essentials of Marketing Research" width="130" height="180" />
        </div>
          <div className="media-body">
            <h4 className="media-heading">Essentials of Marketing Research</h4>
            <ul className="list-group">
              <li className="list-group-item">Author: Joseph F. Hair, Jr.</li>
              <li className="list-group-item">Edition: 3rd Edition</li>
              <li className="list-group-item">ISBN: 978-0-07-802881</li>
              <li className="list-group-item">Publisher: The McGraw-Hill Companies, Inc.</li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <div className="panel-body"><span className="panel-block">TEXTBOOKS I NEED</span>
        <span className="profile-userbuttons">
        <button type="button" className="btn btn-sm pull-right">
            <span className="glyphicon glyphicon-pencil"></span>
            Edit Listing
          </button>
        </span>
        <div className="media">
        <div className="media-left">
          <img className="media-object" src="img/examplebook2.jpg" alt="The Official Guide to GRE" />
        </div>
          <div className="media-body">
            <h4 className="media-heading">The Official Guide to the GRE revised General Test</h4>
            <ul className="list-group">
              <li className="list-group-item">Author: N/A</li>
              <li className="list-group-item">Edition: 2nd Edition</li>
              <li className="list-group-item">ISBN: 978-0-07-179123-6</li>
              <li className="list-group-item">Publisher: Educational Testing Service</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    )
  }
}
