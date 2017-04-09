import React from 'react';
import Search_Feed from './search_feed';
import Home_Feed_Item from './home_feed_item';
import Navbar from './navbar.js';

export default class Search extends React.Component {
  render() {
    return (
          <div>
            <Navbar/>
            <Search_Feed
              numberOfResults='14'
              query='Algorithms'
              sortType='Relevance'>
              <Home_Feed_Item
                pic="https://upload.wikimedia.org/wikipedia/en/4/41/Clrs3.jpeg"
                title='Introduction to Algorithms'
                author='Thomas H. Cormen'
                edition="3rd Edition"
                isbn='978-0262033848'
                publisher='PubPub, Inc'></Home_Feed_Item>
              <Home_Feed_Item
                pic='img/algorithm1.jpg'
                title='Algorithms'
                author='Robert Sedgewick'
                edition='4th Edition'
                isbn='958-0492391326'
                publisher='SpudHub, Inc.'></Home_Feed_Item>
              <Home_Feed_Item
                pic='img/algorithm2.jpg'
                title='Algorithms'
                author='Sanjoy Dasgupta'
                edition='6th Edition'
                isbn='978-1113405806'
                publisher='DubBub, Inc.'></Home_Feed_Item>
                </Search_Feed>
          </div>
    );
  }
}
