var express = require('express');
var searchRouter = express.Router();
var db = require('../modules/db.js');
var database = db.getDatabase();

searchRouter.post('/', function(req, res) {
  // res.status(200).send('Let there be light');
  if (typeof(req.body) === 'string') {
    var queryText = req.body.trim().toLowerCase();
    // Look for items within the database that contain queryText
    database.collection('items').find({
      $text: {
        $search: queryText
      }
    }).toArray(function(err, items) {
      if (err) {
        return sendDatabaseError(res, err);
      }

      // Resolve all items
      var resolvedItems = [];
      for (var i = 0; i < items.length; i++) {
        resolvedItems.push(items[i]);
      }
      res.send(resolvedItems);

      // Special case: No results.
      if (items.length === 0) {
        res.send([]);
      }
    });
  } else {
    // 400: Bad Request.
    res.status(400).end();
  }
});

function sendDatabaseError(res, err) {
  res.status(500).send("A database error occurred: " + err);
}

module.exports = searchRouter;
