import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from './components/home.js';
import Userprofile from './components/userprofile.js';
import Search from './components/search.js';
import Matched from './components/matched.js';
import Message from './components/message.js';
import CreateListing from './components/createlisting.js';

ReactDOM.render((
  <Router>
    <div>
    <Route exact path="/" component={Home}/>
    <Route path="/message" component={Message}/>
    <Route path="/profile" component={Userprofile}/>
    <Route path="/search" component={Search}/>
    <Route path="/matched/:id" component={Matched}/>
    <Route path="/listing/create" component={CreateListing}/>
  </div>
  </Router>
), document.getElementById('app'));
