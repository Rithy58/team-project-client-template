import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';

import Home from './components/home.js';
import Userprofile from './components/userprofile.js';
import Search from './components/search.js';
import Matched from './components/matched.js';
import Message from './components/message.js';

if(document.getElementById('matched') !== null) {
  ReactDOM.render(
    <Matched />,
    document.getElementById('matched')
  );
} else if(document.getElementById('search') !== null) {
  ReactDOM.render(
    <Search />,
    document.getElementById('search'));
} else if(document.getElementById('userprofile') !== null) {
  ReactDOM.render(
    <Userprofile />,
    document.getElementById('userprofile'));
} else if(document.getElementById('home') !== null) {
  ReactDOM.render(
    <Home />,
   document.getElementById('home'));
} else if(document.getElementById('message') !== null) {
  ReactDOM.render(
    <Message />,
   document.getElementById('message'));
}
