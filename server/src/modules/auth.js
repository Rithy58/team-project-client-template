var auth = require('passport');
var Strategy = require('passport-local').Strategy;
var user = require('./user.js');

auth.use(new Strategy(
  function(username, password, cb) {
    user.checkPassword(username, password, function(check) {
      if(check) {
        return cb(null, {username: username});
      } else {
        return cb(null, false, {message: 'Incorrect Login Info'});
      }
    });
}));

module.exports = auth;
