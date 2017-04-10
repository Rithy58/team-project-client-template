import React from 'react';
import Search_Feed from './search_feed';
import Home_Feed_Item from './home_feed_item';
import Navbar from './navbar.js';
import {getQueryData} from '../server.js';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  // Called when user searches.
  onSearch(query) {
    // Send to server.
    getQueryData(query, (queryData) => {
      // Database is now updated. Refresh the feed.
      this.setState(queryData);
    });
  }


  render() {
    return (
          <div>
            <Navbar/>
            <Search_Feed
              numberOfResults='14'
              query='Algorithms'
              sortType='Relevance'>
              {this.state.results.map((feedItem) => {
                return (
                  <Home_Feed_Item
                    pic={feedItem.pic}
                    title={feedItem.title}
                    author={feedItem.author}
                    edition={feedItem.edition}
                    isbn={feedItem.isbn}
                    publisher={feedItem.publisher}></Home_Feed_Item>
                )
              })}
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
