var express = require('express');
var listingRouter = express.Router();
var listing = require('../modules/listing.js');

listingRouter.post('/create', function(req, res) {
  req.io.emit('new listing', req.body);
  listing.createListing(req.jwt.username, req.body, function(result){
    console.log(result);
  })
  res.json({token: req.jwt});
});


module.exports = listingRouter;
