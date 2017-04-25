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
app.use('/api/search', require('./routes/search.js'));
app.use('/api/message', require('./routes/message.js'));

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
