var express = require('express');
var authRouter = express.Router();
var auth = require('../modules/auth.js');
var user = require('../modules/user.js');

authRouter.post('/api/auth/login',
  auth.authenticate('local', { session: false }),
  function(req, res) {
    var token = user.generateJWT(req.body.username);
    res.json({token: token});
  }
);

authRouter.post('/api/auth/register', function(req, res) {
  user.createUser(req.body.username, req.body.password, function(result) {
    var token = user.generateJWT(req.body.username);
    console.log(result);
    res.json({token: token});
  });
});


module.exports = authRouter;
