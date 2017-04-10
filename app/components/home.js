import React from 'react';
import Home_Feed_Item from './home/home_feed_item';
import Home_Feed from './home/home_feed.js';
import Home_Side_Bar from './home/home_side_bar.js';
import Navbar from './navbar.js';
import {getHomeData} from '../server.js';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        "user":{},
        "feeditem": []

    };
  }
  componentDidMount() {
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
                this.state.feeditem.map(
                  (item, index) => {return (
                    <Home_Feed_Item
                    pic={item.pic}
                    title={item.title}
                    author={item.author}
                    edition={item.edition}
                    isbn={item.isbn}
                    publisher={item.publisher}
                    key={index}/>
                  )}
                )
              }

            </Home_Feed>
            <Home_Side_Bar
              name={this.state.user.username}
              pic='http://thedesigninspiration.com/wp-content/uploads/2014/07/Cute-Rabbits-026.jpg'>
              <Home_Feed_Item
                pic="https://upload.wikimedia.org/wikipedia/en/4/41/Clrs3.jpeg"
                title='Introduction to Algorithms'
                author='Thomas H. Cormen'
                edition="3rd Edition"
                isbn='978-0262033848'
                publisher='PubPub, Inc'></Home_Feed_Item>
              <Home_Feed_Item
                pic="https://images-na.ssl-images-amazon.com/images/I/41%2Bzl9fgEML._SX431_BO1,204,203,200_.jpg"
                title='Discrete Mathematics with Applications'
                author='Susanna S. Epp'
                edition='4th Edition'
                isbn='978-0495391326'
                publisher='PubPub, Inc'></Home_Feed_Item>
            </Home_Side_Bar>
          </div>
        </div>
      </div>
    )
  }
}
