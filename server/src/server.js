// Imports the express Node module.
require('dotenv').config();
var express = require('express');
// Creates an Express server.
var server = require('http').Server(app);
var io = require('socket.io')(server);
var app = express();
var bodyParser = require('body-parser');
var database = require('./database.js');
//var path = require('path');
var db = require('./modules/db.js');
//var writeDocument = database.writeDocument;
//var addDocument = database.addDocument;
var readDocument = database.readDocument;

app.use(express.static('../client/build'));

//app.use(bodyParser.text());
//app.use(bodyParser.json());

//NON VERB FUNCTIONS

/**
 * Get the user ID from a token. Returns -1 (an invalid ID)
 * if it fails.
 */
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

//var readDocument = require('./database.js').readDocument;
// Implement your server in this file.
// We should be able to run your server with node src/server.js
require('dotenv').config();
//var express = require('express');
//var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');
var path = require('path');
var db = require('./modules/db.js');

// Middleware
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(express.static('../client/build'));

// Routes
app.use('/api/search', require('./routes/search.js'));
app.use('/api/message', require('./routes/message.js'));

// Catch all other request and send the index file instead
//app.get('*', function (req, res) {
  //  res.sendFile(path.resolve('../client/build', 'index.html'));
//});

// Socket.IO
io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
  socket.on('chat', function(data) {
    console.log(data);
    socket.emit('chat', data);
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
//server.listen(process.env.PORT, function () {
  //db.init();
  //console.log('Server is running on port ' + process.env.PORT);
//});

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

/**
 * Get the feed data for a particular user.
 */
app.get('/user/:userid/home', function(req, res) {
  var userid = req.params.userid;

    // Send response.
    res.send(getHomeData(userid));

    // 401: Unauthorized request.
});
app.listen(3000, function(){
  console.log('Example app listening on port 3000');
});
