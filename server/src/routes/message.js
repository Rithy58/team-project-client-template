var express = require('express');
var messageRouter = express.Router();

messageRouter.get('/', function(req, res) {
  res.status(200).send('fhhff');
});

module.exports = messageRouter;
