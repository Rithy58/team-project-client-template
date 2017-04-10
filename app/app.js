import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'

import Home from './components/home.js';
import Userprofile from './components/userprofile.js';
import Search from './components/search.js';
import Matched from './components/matched.js';
import Message from './components/message.js';
import CreateListing from './components/createlisting.js';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" components={Home}/>
    <Route path="/message" components={Message}/>
    <Route path="/profile" components={Userprofile}/>
    <Route path="/search" components={Search}/>
    <Route path="/matched/:id" components={Matched}/>
    <Route path="/listing/create" components={CreateListing}/>
  </Router>
), document.getElementById('app'));
