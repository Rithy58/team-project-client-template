var express = require('express');
var searchRouter = express.Router();

searchRouter.post('/', function(req, res) {
  // res.status(200).send('Let there be light');
  if (typeof(req.body) === 'string') {
    var queryText = req.body.trim().toLowerCase();
    // Get the 


  }
});

module.exports = searchRouter;
