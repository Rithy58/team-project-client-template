var express = require('express');
var messageRouter = express.Router();
var db = require('../modules/db.js');
var database = db.getDatabase();

messageRouter.get('/', function(req, res) {
  res.status(200).send('fhhff');
});

module.exports = messageRouter;
