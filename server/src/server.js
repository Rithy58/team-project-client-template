// Implement your server in this file.
// We should be able to run your server with node src/server.js
require('dotenv').config();
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');
var path = require('path');
var db = require('./modules/db.js');
var auth = require('./modules/auth.js');
var jwt = require('express-jwt')({
  secret: process.env.JWT_SECRET,
  userProperty: 'jwt'
});

// Middleware
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('../client/build'));
app.use(auth.initialize());
// Make io accessible to other router
app.use(function(req, res, next) {
    req.io = io;
    next();
});

// Routes
app.use('/api/search', require('./routes/search.js'));
app.use('/api/message', require('./routes/message.js'));
app.use('/api/auth', require('./routes/auth.js'));

app.use('/api/listing', jwt, require('./routes/listing.js'));

// Socket.IO
io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
  socket.on('chat', function(data) {
    console.log(data);
    io.emit('chat', data);
  });
});

// Catch all other request and send the index file instead
app.get('*', function (req, res) {
    res.sendFile(path.resolve('../client/build', 'index.html'));
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

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('invalid token...');
  } else {
    next(err);
  }
});

// Starts the server
server.listen(process.env.PORT, function () {
  db.init();
  console.log('Server is running on port ' + process.env.PORT);
});
