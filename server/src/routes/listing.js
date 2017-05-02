var express = require('express');
var listingRouter = express.Router();

listingRouter.post('/create', function(req, res) {
  req.io.emit('chat', 'this actually worked!' + req.body.test);
  res.json({token: req.jwt});
});


module.exports = listingRouter;
