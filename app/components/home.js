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
      "1": {
        "feeditem": {}
      }
    };
  }
  componentDidMount() {
    getHomeData(this.props.params.id, 1, (feedData) => {
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
              <Home_Feed_Item
                pic={this.state['1'].feeditem.pic}
                title={this.state['1'].feeditem.title}
                author={this.state['1'].feeditem.author}
                edition={this.state['1'].feeditem.edition}
                isbn={this.state['1'].feeditem.isbn}
                publisher={this.state['1'].feeditem.publisher}></Home_Feed_Item>
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
              <Home_Feed_Item
                pic="https://images-na.ssl-images-amazon.com/images/I/517euJ3iGeL._SX258_BO1,204,203,200_.jpg"
                title='Java for Dummies'
                author='Barry Burd'
                edition='6th Edition'
                isbn='978-1118407806'
                publisher='PubPub, Inc'></Home_Feed_Item>
            </Home_Feed>
            <Home_Side_Bar
              name="Bunny Carrots"
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
