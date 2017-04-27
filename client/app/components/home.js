import React from 'react';
import Home_Item from './home/home_item.js';
import Home_Login from './home/home_login.js';

export default class Home extends React.Component {
  render() {
    return (
      <div className="row center-block">
        <div className="col-md-8">
          <Home_Item title="Book 1" author="Author 1" isbn="1234" price="$120"></Home_Item>
          <Home_Item title="Book 2" author="Author 2" isbn="5678" price="$140"></Home_Item>
        </div>
        <div className="col-md-4">
          <Home_Login></Home_Login>
        </div>
      </div>
    )
  }
}
