import React from 'react';
import Search_Feed from './search_feed';
import Search_Feed_Item from './search_feed_item';
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
              <Search_Feed_Item
                pic='img/algorithm.jpg'
                title='Introduction to Algorithms, 3rd Ed.'
                author='Thomas H. Cormen'
                location='Amherst, MA'></Search_Feed_Item>
              <Search_Feed_Item
                pic='img/algorithm1.jpg'
                title='Algorithms, 4rd Ed.'
                author='Robert Sedgewick'
                location='Amherst, MA'></Search_Feed_Item>
              <Search_Feed_Item
                pic='img/algorithm.jpg'
                title='Algorithms'
                author='Sanjoy Dasgupta'
                location='Amherst, MA'></Search_Feed_Item>
            </Search_Feed>
          </div>
    );
  }
}
