var readDocument = require('./database.js').readDocument;
// Implement your server in this file.
// We should be able to run your server with node src/server.js
require('dotenv').config();
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');
var path = require('path');

// Middleware
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(express.static('../client/build'));

// Routes


// Catch all other request and send the index file instead
app.get('*', function (req, res) {
    res.sendFile(path.resolve('../client/build', 'index.html'));
});

// Socket.IO
io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

/**
 * Translate JSON Schema Validation failures into error 400s.
 */
app.use(function(err, req, res, next) {
  if (err.name === 'JsonSchemaValidation') {
    // Set a bad request http response status
    res.status(400).end();
  } else {
    // It's some other sort of error; pass it to next error middleware handler
    next(err);
  }
});

// Starts the server
server.listen(process.env.PORT, function () {
  console.log('Server is running on port ' + process.env.PORT);
});

function getHomeData(id){
  var feed = {
      "user":{},
      "item": [],
      "saleitem":[]

  };
  var feedData = readDocument('feed',id);
  feed.user = readDocument('users', id);
  feed.item = feedData.items.map(
    (index)=>readDocument('items', index)
  );
  var listings = readDocument('listings',id);
  feed.saleitem = listings.has.map(
    (index)=>readDocument('items', index)
  );
  return feed;
}
function getUserIdFromToken(authorizationLine) {
  try {
    // Cut off "Bearer " from the header value.
    var token = authorizationLine.slice(7);
    // Convert the base64 string to a UTF-8 string.
    var regularString = new Buffer(token, 'base64').toString('utf8');
    // Convert the UTF-8 string into a JavaScript object.
    var tokenObj = JSON.parse(regularString);
    var id = tokenObj['id'];
    // Check that id is a number.
    if (typeof id === 'number') {
      return id;
    } else {
      // Not a number. Return -1, an invalid ID.
      return -1;
    }
  } catch (e) {
    // Return an invalid ID.
    return -1;
  }
}

/**
 * Get the feed data for a particular user.
 */
app.get('/user/:userid/feed', function(req, res) {
  var userid = req.params.userid;
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  // userid is a string. We need it to be a number.
  // Parameters are always strings.
  var useridNumber = parseInt(userid, 10);
  if (fromUser === useridNumber) {
    // Send response.
    res.send(getHomeData(userid));
  } else {
    // 401: Unauthorized request.
    res.status(401).end();
  }
});
