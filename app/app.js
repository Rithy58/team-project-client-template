import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';

//import home from './components/home.js';
//import search from './components/search.js';
//import Userprofile from './components/userprofile.js';
import Matched from './components/matched.js';
//import message from './components/message.js';

if(document.getElementById('matched') !== null) {
  ReactDOM.render(
    <Matched />,
    document.getElementById('matched')
  );
}

/*
if(document.getElementById('home') !== null) {
  ReactDOM.render(<home />, document.getElementById('home'));
} else if(document.getElementById('search') !== null) {
  ReactDOM.render(<search />, document.getElementById('search'));
} else if(document.getElementById('userprofile') !== null) {
  ReactDOM.render(<userprofile />, document.getElementById('userprofile'));
} else if(document.getElementById('matched') !== null) {
  ReactDOM.render(<matched />, document.getElementById('matched'));
} else if(document.getElementById('message') !== null) {
  ReactDOM.render(<message />, document.getElementById('message'));
}*/
