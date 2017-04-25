import React from 'react';
import Home_Feed_Item from './home/home_feed_item';
import Home_Feed from './home/home_feed.js';
import Home_Side_Bar from './home/home_side_bar.js';
import Navbar from './navbar.js';
import {getHomeData} from '../server.js';
import io from 'socket.io-client'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        "user":{},
        "item": [],
        "saleitem":[]

    };
  }
  componentDidMount() {
    var socket = io.connect();
    socket.on('news', function (data) {
      console.log(data);
      socket.emit('my other event', { my: 'data' });
    });

    getHomeData(3, (feedData) => {
      this.setState(feedData);
    });
  }
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
          <div className="home-feed">
            <div className="words">
              User Postings
            </div>
            <Home_Feed>
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

            </Home_Feed>
            <Home_Side_Bar
              name={this.state.user.username}
              pic='http://thedesigninspiration.com/wp-content/uploads/2014/07/Cute-Rabbits-026.jpg'>
              {
                this.state.saleitem.map(
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
            </Home_Side_Bar>
          </div>
        </div>
      </div>
    )
  }
}
