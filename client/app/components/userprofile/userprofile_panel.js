import React from 'react';
import Userprofile_Item from './userprofile_item.js'
import Home_Feed_Item from '../home/home_feed_item.js'
import {getProfileData} from '../../server.js';

export default class Userprofile_Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "user": {},
      "saleitem":[]
    };
  }

  componentDidMount() {
    getProfileData(3, (feedData) =>{
      this.setState(feedData);
    });
  }
  render() {
    return (
    <div className="col-md-9 profile">
      <div className="panel-body"><span className="panel-block">TEXTBOOKS I OWN</span>
        <span className="profile-userbuttons">
        <button type="button" className="btn btn-sm pull-right">
            Edit Listing
          </button>
        </span>

        {
          this.state.item.map(
            (item, index) => {return (
              <Home_Feed_Item
              picture={item.picture}
              title={item.title}
              isbn={item.isbn}
              price={item.price}
              key={index}/>
            )}
          )
        }

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
