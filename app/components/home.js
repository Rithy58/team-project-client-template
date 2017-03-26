import React from 'react';
//import ReactDOM from 'react-dom';
//import Home_Feed from './components/home_feed.js'
import Home_Side_Bar from './home_side_bar.js';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="home-feed">
            <div className="words">
              User Postings
            </div>
            <Home_Side_Bar />
          </div>
        </div>
      </div>
    )
  }
}
