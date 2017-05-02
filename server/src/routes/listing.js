var express = require('express');
var listingRouter = express.Router();

listingRouter.post('/create', function(req, res) {
  req.io.emit('new listing', req.body);
  res.json({token: req.jwt});
});


module.exports = listingRouter;
