import React from 'react';
import Search_Feed from './search_feed';
import Home_Feed_Item from './home/home_feed_item';
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

      this.setState({results: [queryData]});
    });
  }


  render() {
    return (
          <div>
            <Navbar onSearch={(query) => this.onSearch(query)}/>
            <Search_Feed
              numberOfResults='1'
              query='Algorithms'
              sortType='Relevance'>
              {this.state.results.map((feedItem) => {
                return (
                  <Home_Feed_Item
                    id={feedItem._id}
                    pic={feedItem.pic}
                    title={feedItem.title}
                    author={feedItem.author}
                    edition={feedItem.edition}
                    isbn={feedItem.isbn}
                    publisher={feedItem.publisher}></Home_Feed_Item>
                )
              })}
                </Search_Feed>
          </div>
    );
  }
}
